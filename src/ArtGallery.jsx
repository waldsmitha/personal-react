import { useEffect, useState } from "react";
import { artworks } from "./artworks";

function palette(artwork) {
  return {
    "--ground": artwork.colors[0],
    "--light-one": artwork.colors[1],
    "--light-two": artwork.colors[2],
  };
}

function GallerySlide({ current, previous }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`gallery-slide ${loaded ? "is-loaded" : ""}`}>
      {previous && (
        <div
          aria-hidden="true"
          className={`gallery-atmosphere gallery-outgoing atmosphere-${previous.environment}`}
          style={palette(previous)}
        />
      )}
      <div
        aria-hidden="true"
        className={`gallery-atmosphere gallery-incoming atmosphere-${current.environment}`}
        style={palette(current)}
      />
      <div className="gallery-stage">
        {previous && (
          <figure className="gallery-art gallery-outgoing" aria-hidden="true">
            <img src={previous.url} alt="" />
          </figure>
        )}
        <figure className="gallery-art gallery-incoming">
          <img
            src={current.url}
            alt={current.title}
            onLoad={() => setLoaded(true)}
            fetchPriority="high"
          />
        </figure>
      </div>
    </div>
  );
}

export default function ArtGallery({ active, backRef, onBack }) {
  const [selection, setSelection] = useState(() => ({
    index: Math.floor(Math.random() * artworks.length),
    previous: null,
    revision: 0,
  }));
  const current = artworks[selection.index];
  const previous =
    selection.previous === null ? null : artworks[selection.previous];

  function step(direction) {
    setSelection((state) => ({
      index: (state.index + direction + artworks.length) % artworks.length,
      previous: state.index,
      revision: state.revision + 1,
    }));
  }

  useEffect(() => {
    // Warm the small local collection so a color change never waits on the next image.
    artworks.forEach(({ url }) => {
      const image = new Image();
      image.src = url;
    });
  }, []);

  useEffect(() => {
    if (!active) return;
    const navigate = (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        step(event.key === "ArrowRight" ? 1 : -1);
      }
    };
    window.addEventListener("keydown", navigate);
    return () => window.removeEventListener("keydown", navigate);
  }, [active]);

  return (
    <section
      className="art-gallery"
      aria-labelledby="gallery-title"
      inert={!active}
    >
      <h2 id="gallery-title" className="sr-only">
        Graphic design by Austin Waldsmith
      </h2>
      <GallerySlide
        key={selection.revision}
        current={current}
        previous={previous}
      />
      <nav className="gallery-navigation" aria-label="Artwork navigation">
        <button onClick={() => step(-1)} aria-label="Previous artwork">
          PREV
        </button>
        <button onClick={() => step(1)} aria-label="Next artwork">
          NEXT
        </button>
      </nav>
      <footer className="gallery-footer">
        <button ref={backRef} onClick={onBack}>
          ↖ Back
        </button>
        <div className="gallery-caption" aria-live="polite" aria-atomic="true">
          <h3>{current.title}</h3>
          <span>
            {String(selection.index + 1).padStart(2, "0")} /{" "}
            {String(artworks.length).padStart(2, "0")}
          </span>
        </div>
        <span className="gallery-category">GRAPHIC DESIGN</span>
      </footer>
      <p className="sr-only">
        Use PREV and NEXT, or the left and right arrow keys, to explore the
        collection.
      </p>
    </section>
  );
}
