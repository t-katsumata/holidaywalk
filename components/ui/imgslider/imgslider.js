'use client'

const { useState, useEffect } = require("react");
import style from './imgslider.module.scss';

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window !== "object") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const timerId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timerId)
  }, [images.length]);

  return (
    <div role="region" aria-label="ウォーキング記録の画像スライダー" className={style.imgSlide}>
      {images.map(({ url, width, height }, index) => (
        <figure key={index}>
          <img
            src={url}
            alt={`風景画像${index + 1}`}
            aria-hidden={currentIndex !== index}
            className={`${style.imgSlideItem} ${currentIndex === index ? style.isActive : ''}`}
            width={width}
            height={height}
            sizes="(min-width: 1000px) 1000px, 100vw"
          />
        </figure>
      ))}
    </div>
  );
}