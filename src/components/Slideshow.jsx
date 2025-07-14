import {useState} from "react";
import "./Slideshow.scss";

function Slideshow({images = []}) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  if (total === 0) return null;

  const prevSlide = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  return (
    <div className="slideshow">
      <img src={images[current]} alt={`Slide ${current + 1}`} className="slideshow-image" />
      {total > 1 && (
        <>
          <button className="slideshow-arrow left" onClick={prevSlide} aria-label="Previous image">
            &#10094;
          </button>
          <button className="slideshow-arrow right" onClick={nextSlide} aria-label="Next image">
            &#10095;
          </button>
          <div className="slideshow-count">
            {current + 1}/{total}
          </div>
        </>
      )}
    </div>
  );
}

export default Slideshow;
