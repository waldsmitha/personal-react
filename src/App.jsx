import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import ArtGallery from "./ArtGallery";
import GlobeInfo from "./GlobeInfo";

export default function App() {
  const canvasRef = useRef(null);
  const experienceRef = useRef(null);
  const returnRef = useRef(null);
  const enterRef = useRef(null);
  const artistReturnRef = useRef(null);
  const artistEnterRef = useRef(null);
  const infoTimer = useRef(null);
  const pinnedInfoRef = useRef(null);
  const dismissedHoverRef = useRef(null);
  const [pinnedInfo, setPinnedInfo] = useState(null);
  const [info, setInfo] = useState(null);
  const [view, setView] = useState("globe");
  const [ready, setReady] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [failed, setFailed] = useState(false);
  const [galleryEntry, setGalleryEntry] = useState(0);
  const [paused, setPaused] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const revealInfo = useCallback((next) => {
    clearTimeout(infoTimer.current);
    if (next && next === dismissedHoverRef.current) return;
    dismissedHoverRef.current = null;
    if (pinnedInfoRef.current) return;
    if (next) setInfo(next);
    else infoTimer.current = setTimeout(() => setInfo(null), 180);
  }, []);

  const selectInfo = useCallback((next) => {
    pinnedInfoRef.current = next;
    setPinnedInfo(next);
    experienceRef.current?.setActiveInfo(next);
    clearTimeout(infoTimer.current);
    setInfo(next);
  }, []);

  const toggleInfo = useCallback(
    (next) => {
      const closing = pinnedInfoRef.current === next;
      selectInfo(closing ? null : next);
      dismissedHoverRef.current = closing ? next : null;
    },
    [selectInfo],
  );

  function navigate(destination) {
    selectInfo(null);
    experienceRef.current?.navigate(destination);
    if (destination === "artist") setGalleryEntry((entry) => entry + 1);
    setView(destination);
    requestAnimationFrame(() =>
      (destination === "box"
        ? returnRef
        : destination === "artist"
          ? artistReturnRef
          : view === "artist"
            ? artistEnterRef
            : enterRef
      ).current?.focus({ preventScroll: true }),
    );
  }

  useEffect(() => {
    let disposed = false;
    let experience;
    let completed = 0;
    let displayed = 0;
    let lastFrame = null;
    let counterFrame;
    const reducedMotion = matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const count = (now) => {
      const delta =
        lastFrame === null ? 0 : Math.min((now - lastFrame) / 1000, 0.032);
      lastFrame = now;
      const target = (completed / 8) * 100;
      displayed = reducedMotion
        ? target
        : Math.min(
            target,
            displayed + Math.min(50, (target - displayed) * 5) * delta,
          );
      if (completed === 8 && displayed >= 99.9) {
        setLoadingProgress(100);
        setReady(true);
        return;
      }
      setLoadingProgress(Math.floor(displayed));
      counterFrame = requestAnimationFrame(count);
    };
    counterFrame = requestAnimationFrame(count);
    const fail = () => {
      cancelAnimationFrame(counterFrame);
      if (!disposed) setFailed(true);
    };
    // Five loaded resources, texture generation, scene setup, and the first rendered frame.
    const advance = () => {
      if (disposed) return;
      completed += 1;
    };
    const fonts = [
      '600 100px "Barlow Condensed"',
      '700 100px "Barlow Condensed"',
      '700 100px "Libre Baskerville"',
      '400 12px "IBM Plex Mono"',
    ];
    Promise.all([
      import("./experience").then((module) => {
        advance();
        return module;
      }),
      ...fonts.map((font) => document.fonts.load(font).then(advance)),
    ])
      .then(([{ createExperience }]) => {
        if (disposed) return;
        try {
          experience = createExperience(
            canvasRef.current,
            (destination) => {
              selectInfo(null);
              if (destination === "artist")
                setGalleryEntry((entry) => entry + 1);
              setView(destination);
              requestAnimationFrame(() =>
                (destination === "artist"
                  ? artistReturnRef
                  : returnRef
                ).current?.focus({ preventScroll: true }),
              );
            },
            fail,
            revealInfo,
            advance,
            toggleInfo,
          );
          experienceRef.current = experience;
        } catch {
          fail();
        }
      })
      .catch(fail);
    return () => {
      disposed = true;
      cancelAnimationFrame(counterFrame);
      clearTimeout(infoTimer.current);
      experience?.dispose();
    };
  }, [revealInfo, selectInfo, toggleInfo]);

  useEffect(() => {
    experienceRef.current?.pause(paused);
  }, [paused, ready]);

  useEffect(() => {
    const escape = (event) => {
      if (event.key === "Escape" && view === "globe") {
        selectInfo(null);
      }
      if (event.key === "Escape" && view !== "globe") {
        experienceRef.current?.navigate("globe");
        setView("globe");
        requestAnimationFrame(() =>
          (view === "artist" ? artistEnterRef : enterRef).current?.focus({
            preventScroll: true,
          }),
        );
      }
    };
    window.addEventListener("keydown", escape);
    return () => window.removeEventListener("keydown", escape);
  }, [view, selectInfo]);

  return (
    <main
      className={`experience view-${view} ${ready ? "is-ready" : ""} ${failed ? "has-fallback" : ""}`}
    >
      <canvas ref={canvasRef} className="scene" aria-hidden="true" />

      <section
        className="globe-interface"
        aria-label="Austin Waldsmith, full stack engineer and graphic designer"
        inert={view !== "globe" || (!ready && !failed)}
      >
        <h1 className="sr-only">
          Austin Waldsmith — Full Stack Engineer — Graphic Design
        </h1>
        <p className="sr-only">
          React, Next.js, TypeScript, Node.js, Python, PostgreSQL, AWS, GCP,
          Docker, Kubernetes. Explore Box Black, a secure and accessible
          document viewing platform.
        </p>
        <div className="globe-sidebar">
          <header className="masthead" inert={!ready && !failed}>
            <div className="identity" aria-hidden={view !== "globe"}>
              Austin Waldsmith <br />
              Senior full-stack engineer <br /> with an eye for design.
            </div>
            <button
              className="motion-control"
              onClick={() => setPaused(!paused)}
              aria-pressed={paused}
            >
              <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
              {paused ? "Resume motion" : "Pause motion"}
            </button>
          </header>
          <AnimatePresence mode="wait">
            {info && (
              <GlobeInfo
                key={info}
                section={info}
                onMouseEnter={() => clearTimeout(infoTimer.current)}
                onMouseLeave={() => revealInfo(null)}
                onClose={() => selectInfo(null)}
              />
            )}
          </AnimatePresence>

          <div className="project-entry">
            <button
              ref={enterRef}
              className="enter-project"
              onFocus={() => experienceRef.current?.highlight("box")}
              onBlur={() => experienceRef.current?.highlight(null)}
              onMouseEnter={() => experienceRef.current?.highlight("box")}
              onMouseLeave={() => experienceRef.current?.highlight(null)}
              onClick={() => navigate("box")}
            >
              BOX BLACK <span aria-hidden="true">↗</span>
            </button>
            <nav className="profile-navigation" aria-label="About Austin">
              {["experience", "skills"].map((item) => (
                <button
                  key={item}
                  className="enter-project"
                  aria-expanded={info === item}
                  aria-pressed={pinnedInfo === item}
                  aria-controls="globe-info"
                  onMouseEnter={() => experienceRef.current?.highlight(item)}
                  onMouseLeave={() => experienceRef.current?.highlight(null)}
                  onFocus={() => experienceRef.current?.highlight(item)}
                  onBlur={() => experienceRef.current?.highlight(null)}
                  onClick={() => toggleInfo(item)}
                >
                  {item}
                </button>
              ))}
            </nav>
            <button
              ref={artistEnterRef}
              className="enter-project artist-entry"
              onFocus={() => experienceRef.current?.highlight("artist")}
              onBlur={() => experienceRef.current?.highlight(null)}
              onMouseEnter={() => experienceRef.current?.highlight("artist")}
              onMouseLeave={() => experienceRef.current?.highlight(null)}
              onClick={() => navigate("artist")}
            >
              Graphic Design <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>
      {galleryEntry > 0 && (
        <ArtGallery
          key={galleryEntry}
          active={view === "artist"}
          backRef={artistReturnRef}
          onBack={() => navigate("globe")}
        />
      )}
      <section
        className="box-interface"
        aria-labelledby="box-title"
        inert={view !== "box"}
      >
        <div className="box-header">
          <button
            ref={returnRef}
            className="back-button"
            onClick={() => navigate("globe")}
          >
            <span aria-hidden="true">↖</span> Back
          </button>
          <button
            className="motion-control"
            onClick={() => setPaused(!paused)}
            aria-pressed={paused}
          >
            <span aria-hidden="true">{paused ? "▷" : "Ⅱ"}</span>
            {paused ? "Resume motion" : "Pause motion"}
          </button>
        </div>
        <h2 id="box-title" className="box-title">
          BOX BLACK
        </h2>
        <div className="project-panel">
          <div className="panel-heading">
            <span className="eyebrow">Box Black</span>
            <h3>
              Secure.
              <br />
              Accessible.
              <br />
              Traceable.
            </h3>
          </div>
          <div className="panel-description">
            <p>
              An all-in-one document viewing platform built around security,
              accessibility, and leak traceability.
            </p>
            {/* <form className="box-black-email-signup">
              <label htmlFor="box-black-email-signup-input">
                Enter your email for updates.
              </label>
              <input id="box-black-email-signup-input" type="email"></input>
              <button type="submit">Submit</button>
            </form> */}
            <p>Coming Soon.</p>
            <span>
              Secure documents. Accessible to all. Leaks traced to the source.
            </span>
          </div>
        </div>
      </section>
      <div className="loading" aria-hidden={ready || failed}>
        <div
          className="loading-percent"
          role="progressbar"
          aria-label="Loading scene"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={loadingProgress}
        >
          <svg viewBox="0 0 1000 450" aria-hidden="true">
            <text
              x="20"
              y="355"
              textLength="960"
              lengthAdjust="spacingAndGlyphs"
            >
              {String(loadingProgress).padStart(3, "0")}%
            </text>
          </svg>
        </div>
      </div>
      {failed && (
        <div className="fallback" role="status">
          <span>Austin Waldsmith</span>
          <p>Full Stack Engineer *** Graphic Design</p>
          <small>
            The 3D scene is unavailable in this browser. You can still explore
            Box Black below.
          </small>
        </div>
      )}
      <span className="sr-only" aria-live="polite">
        {view === "box"
          ? "Box Black project"
          : view === "artist"
            ? "Graphic design collection"
            : "Austin Waldsmith portfolio"}
      </span>
    </main>
  );
}
