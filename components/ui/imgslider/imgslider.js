'use client'

const { useState, useEffect } = require("react");
import style from './imgslider.module.scss'

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timerId)
  }, [])
  return (
    <div className={style.imgSlide}>
      {images.map(({ url, width, height }, index) => (
        <figure key={index}>
          <img
            src={url}
            alt=""
            className={`${style.imgSlideItem} ${currentIndex === index ? style.isActive : ''}`}
            width={width}
            height={height}
            sizes="(min-width: 1000px) 1000px, 100vw"
          />
        </figure>
      ))}
    </div>
  )
}