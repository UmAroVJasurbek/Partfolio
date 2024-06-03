import React, { useState } from 'react';
import './Carousel.scss';

interface CarouselProps {
    images?: string[]; 
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(1); // Start with the second image as the middle image

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
    const prevImageIndex = (currentIndex - 1 + images.length) % images.length;
    const nextImageIndex = (currentIndex + 1) % images.length;

    return (
        <div className="carousel-container">
            <button className="carousel-button prev" onClick={handlePrev}>
                &lt;
            </button>
            <div className="carousel-images">
               <div className="carousel_container">
               <img
                    src={images[prevImageIndex]}
                    alt={`Slide ${prevImageIndex}`}
                    className={`carousel-image ${images[prevImageIndex] === 'https://static.patek.com/images/jewels/face/270/205_9083GR_001.jpg' ? 'special-style' : ''}`}
                />
               </div>
              <div className="carousel_container">
              <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex}`}
                    className={`carousel-image focus ${images[currentIndex] === 'https://static.patek.com/images/jewels/face/270/205_9083GR_001.jpg' ? 'special-style' : ''}`}
                />
              </div>
               <div className="carousel_container">
               <img
                    src={images[nextImageIndex]}
                    alt={`Slide ${nextImageIndex}`}
                    className={`carousel-image ${images[nextImageIndex] === 'https://static.patek.com/images/jewels/face/270/205_9083GR_001.jpg' ? 'special-style' : ''}`}
                />
               </div>
            </div>
            <button className="carousel-button next" onClick={handleNext}>
                &gt;
            </button>
            <div className="indicator-container">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Carousel;