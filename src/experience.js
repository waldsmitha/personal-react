import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

const clamp = THREE.MathUtils.clamp;
const smooth = (a, b, value) => {
  const t = clamp((value - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
const ease = (t) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);
const bands = [
  {
    text: "Austin Waldsmith * ",
    size: 65,
    serif: true,
    repeats: 6,
  },
  { text: "ENGINEER * GRAPHIC DESIGN * ", size: 82 },
  {
    text: "Austin Waldsmith * ",
    size: 92,
    repeats: 6,
  },
  {
    text: "Experience: Morgan Stanley * Rodo * Cario * Seasoft * ",
    size: 72,
    info: "experience",
  },
  {
    text: "Skills: AWS * GCP * Docker * Kubernetes * ",
    size: 84,
    serif: true,
    info: "skills",
  },
  {
    text: "React * Next.js * TypeScript * Node.js * Python * PostgreSQL * ",
    size: 84,
    info: "skills",
  },
  {
    text: "Box Black * ",
    size: 84,
    action: "box",
    info: "box",
  },
  {
    text: "Graphic Design * ",
    size: 72,
    serif: true,
    action: "artist",
    info: "artist",
  },
  {
    text: "UI/UX * Figma * Accessibility * Responsive Design * ",
    size: 75,
  },
  {
    text: "AUSTIN WALDSMITH * ",
    size: 92,
    repeats: 6,
  },
  { text: "Engineer * Graphic Design * ", size: 48 },
].map((band, index, all) => ({
  ...band,
  top: 0.05 + (0.92 * index) / all.length,
  bottom: 0.05 + (0.92 * (index + 1)) / all.length,
}));

function globeTexture(renderer) {
  const canvas = document.createElement("canvas");
  canvas.width = Math.min(
    window.innerWidth < 700 ? 4096 : 8192,
    renderer.capabilities.maxTextureSize,
  );
  canvas.height = canvas.width / 2;
  const ctx = canvas.getContext("2d");
  const scale = canvas.width / 4096;
  ctx.scale(scale, scale);
  ctx.fillStyle = "#e4decd";
  ctx.fillRect(0, 0, 4096, 2048);
  ctx.fillStyle = "#171611";
  ctx.textBaseline = "middle";
  for (const band of bands) {
    const y = band.top * 2048;
    const height = (band.bottom - band.top) * 2048;
    ctx.fillRect(0, y, 4096, 7);
    ctx.fillRect(0, y + height - 7, 4096, 7);
    ctx.font = ` 600 ${band.size}px "Barlow Condensed"`;
    const width = ctx.measureText(band.text).width;
    const repeats = band.repeats ?? Math.max(1, Math.round(4096 / width));
    const tile = 4096 / repeats;
    ctx.save();
    ctx.scale(tile / width, 1);
    for (let i = -1; i <= repeats; i++)
      ctx.fillText(band.text, i * width, y + height / 2 + band.size * 0.055);
    ctx.restore();
  }
  // Small, deterministic flecks give both paper and ink the wear of newsprint.
  let seed = 17;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  for (let i = 0; i < 105000; i++) {
    ctx.fillStyle = i % 3 ? "rgba(242,234,212,0.24)" : "rgba(45,35,20,0.12)";
    ctx.fillRect(
      random() * 4096,
      random() * 2048,
      0.5 + random() * 2,
      0.5 + random() * 2,
    );
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
  return texture;
}

export function createExperience(
  canvas,
  onEnter,
  onFailure,
  onInfo,
  onProgress,
  onToggleInfo,
) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  const background = new THREE.Color("#080808");
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 60);
  const texture = globeTexture(renderer);
  onProgress();
  const globe = new THREE.Mesh(
    new THREE.SphereGeometry(3.25, 160, 112),
    new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false,
      transparent: true,
    }),
  );
  const projectHover = { value: new THREE.Vector2() };
  const projectTarget = new THREE.Vector2();
  const hoverBands = bands
    .filter((band) => band.action || band.info)
    .map((band) => ({
      key: band.action ?? band.info,
      value: new THREE.Vector3(band.top, band.bottom, 0),
      target: 0,
    }));
  globe.material.onBeforeCompile = (shader) => {
    shader.uniforms.projectHover = projectHover;
    shader.uniforms.hoverBands = {
      value: hoverBands.map((band) => band.value),
    };
    shader.fragmentShader =
      `uniform vec2 projectHover;\nuniform vec3 hoverBands[${hoverBands.length}];\n${shader.fragmentShader}`.replace(
        "#include <map_fragment>",
        `
      #include <map_fragment>
      float latitude = 1.0 - vMapUv.y;
      float hoverAmount = 0.0;
      for (int i = 0; i < ${hoverBands.length}; i++) {
        if (latitude >= hoverBands[i].x && latitude <= hoverBands[i].y) {
          hoverAmount = max(hoverAmount, hoverBands[i].z);
        }
      }
      float ink = 1.0 - smoothstep(0.03, 0.65, dot(diffuseColor.rgb, vec3(0.3333)));
      vec3 inverted = mix(vec3(0.004), vec3(0.776, 0.730, 0.610), ink);
      diffuseColor.rgb = mix(diffuseColor.rgb, inverted, hoverAmount);
      diffuseColor.rgb = mix(diffuseColor.rgb, mix(vec3(0.004), vec3(1.0), ink), projectHover.x);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0), projectHover.y);
      diffuseColor.a *= mix(1.0, smoothstep(0.35, 0.65, ink), projectHover.y);
    `,
      );
  };
  globe.rotation.set(0, -Math.PI * 0.54, -0.025);
  scene.add(globe);
  const cube = new THREE.Mesh(
    new RoundedBoxGeometry(2.35, 2.35, 2.35, 3, 0.025),
    new THREE.MeshStandardMaterial({
      color: "#161616",
      roughness: 0.32,
      metalness: 0.38,
    }),
  );
  cube.rotation.set(0.32, 0.52, -0.16);
  cube.visible = false;
  scene.add(cube);
  // The final camera faces +Z: its left is world +X, and behind the cube is +Z.
  const light = new THREE.DirectionalLight("#ffffff", 7);
  light.position.set(3, 4, 5);
  scene.add(light);
  const pointer = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  const black = new THREE.Color("#080808");
  const white = new THREE.Color("#f5f5f1");
  const lookAt = new THREE.Vector3();
  const motionPreference = matchMedia("(prefers-reduced-motion: reduce)");
  let paused = motionPreference.matches;
  let destination = "globe";
  let progress = 0;
  let from = 0;
  let to = 0;
  let transitionStart = null;
  let boxTime = 0;
  let lastTime = null;
  let activeTime = 0;
  let activeScene = "box";
  let currentZoom = 0;
  let returnZoom = 0;
  let width = 1;
  let height = 1;
  let firstFrame = true;
  let activeInfo = null;
  let targetTilt = 0;
  let cubePreview = null;
  const scrollSurface = canvas.parentElement;

  function resize() {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    globe.position.x = width / height < 0.8 ? 2.65 : 2.45;
    globe.position.y = width / height < 0.8 ? 0.35 : 0;
  }
  const observer = new ResizeObserver(resize);
  observer.observe(canvas);
  resize();
  onProgress();

  function navigate(next) {
    if (destination === next) return;
    destination = next;
    if (next !== "globe") activeScene = next;
    returnZoom = currentZoom;
    from = progress;
    to = next === "globe" ? 0 : 1;
    transitionStart = null;
    boxTime = 0;
    canvas.style.cursor = "default";
    highlight(null);
  }
  function overAction(event) {
    if (destination !== "globe" || progress > 0.01) return null;
    const rect = canvas.getBoundingClientRect();
    pointer.set(
      ((event.clientX - rect.left) / width) * 2 - 1,
      (-(event.clientY - rect.top) / height) * 2 + 1,
    );
    raycaster.setFromCamera(pointer, camera);
    const hit = raycaster.intersectObject(globe)[0];
    return hit
      ? bands.find(
          (band) =>
            (band.action || band.info) &&
            1 - hit.uv.y >= band.top &&
            1 - hit.uv.y <= band.bottom,
        )
      : null;
  }
  function highlight(action) {
    hoverBands.forEach((band) => {
      band.target = band.key === action || band.key === activeInfo ? 1 : 0;
    });
    onInfo(bands.find((band) => band.info === action)?.info ?? null);
  }
  function pointerMove(event) {
    const band = overAction(event);
    canvas.style.cursor = band ? "pointer" : "default";
    highlight(band?.action ?? band?.info);
  }
  function pointerLeave() {
    highlight(null);
    canvas.style.cursor = "default";
  }
  function click(event) {
    const band = overAction(event);
    if (band?.action) {
      navigate(band.action);
      onEnter(band.action);
    } else if (band?.info) onToggleInfo(band.info);
  }
  function contextLost(event) {
    event.preventDefault();
    renderer.setAnimationLoop(null);
    onFailure();
  }
  function wheel(event) {
    if (
      destination !== "globe" ||
      progress > 0.01 ||
      event.ctrlKey ||
      !scrollSurface.classList.contains("is-ready") ||
      event.target.closest(".globe-info")
    )
      return;
    event.preventDefault();
    const unit =
      event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? height : 1;
    targetTilt = clamp(
      targetTilt + clamp(event.deltaY * unit, -160, 160) * 0.0012,
      -0.8,
      0.8,
    );
    highlight(null);
  }
  canvas.addEventListener("pointermove", pointerMove);
  canvas.addEventListener("click", click);
  canvas.addEventListener("pointerleave", pointerLeave);
  canvas.addEventListener("webglcontextlost", contextLost);
  scrollSurface.addEventListener("wheel", wheel, { passive: false });
  renderer.setAnimationLoop((now) => {
    const delta =
      lastTime === null ? 0 : Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    if (document.hidden) return;
    if (transitionStart === null) transitionStart = now;
    const duration = motionPreference.matches ? 1 : 2600;
    const elapsed = (now - transitionStart) / duration;
    progress = THREE.MathUtils.lerp(from, to, ease(clamp(elapsed, 0, 1)));
    if (destination === "artist" && progress === 1) return;
    globe.rotation.x = motionPreference.matches
      ? targetTilt
      : THREE.MathUtils.damp(globe.rotation.x, targetTilt, 8, delta);
    hoverBands.forEach((band) => {
      band.value.z = motionPreference.matches
        ? band.target
        : THREE.MathUtils.damp(band.value.z, band.target, 12, delta);
    });
    projectHover.value.lerp(
      projectTarget,
      motionPreference.matches ? 1 : 1 - Math.exp(-7 * delta),
    );
    if (!paused) {
      activeTime += delta;
      // Negative Y rotation carries the front-facing text to the viewer's left.
      globe.rotation.y -= delta * 0.065;
      cube.rotation.y += delta * 0.095;
      cube.rotation.x = 0.32 + Math.sin(activeTime * 0.25) * 0.09;
      cube.rotation.z = -0.16 + Math.sin(activeTime * 0.18) * 0.055;
    }
    if (destination === "box") boxTime += delta;
    const zoom = motionPreference.matches
      ? destination === "box"
        ? 1
        : 0
      : destination === "box"
        ? smooth(2.3, 5.4, boxTime)
        : returnZoom * (1 - smooth(0, 0.75, elapsed));
    currentZoom = zoom;
    const radius = 8 + zoom * 1.4;
    const angle = progress * Math.PI;
    camera.position.set(Math.sin(angle) * radius, 0, Math.cos(angle) * radius);
    lookAt.set(0, -0.48 * zoom, 0);
    camera.lookAt(lookAt);
    globe.visible = progress < 0.54;
    cube.visible = activeScene === "box" && progress >= 0.54;
    cube.position.y = 0.12 + (paused ? 0 : Math.sin(activeTime * 0.55) * 0.07);
    scene.background =
      progress > 0
        ? background
            .copy(black)
            .lerp(
              white,
              destination === "box" ? 1 : smooth(0.18, 0.54, progress),
            )
        : null;
    renderer.render(scene, camera);

    if (firstFrame) {
      firstFrame = false;
      onProgress();
    }
  });
  return {
    navigate,
    highlight,
    setActiveInfo(value) {
      activeInfo = value;
      highlight(value);
    },
    pause(value) {
      paused = value;
    },
    dispose() {
      renderer.setAnimationLoop(null);
      observer.disconnect();
      canvas.removeEventListener("pointermove", pointerMove);
      canvas.removeEventListener("click", click);
      canvas.removeEventListener("pointerleave", pointerLeave);
      canvas.removeEventListener("webglcontextlost", contextLost);
      scrollSurface.removeEventListener("wheel", wheel);
      globe.geometry.dispose();
      globe.material.dispose();
      texture.dispose();
      cube.geometry.dispose();
      cube.material.dispose();
      renderer.dispose();
    },
  };
}
