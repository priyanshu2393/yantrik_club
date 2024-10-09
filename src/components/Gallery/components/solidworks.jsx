import React, { useState } from 'react';
import '../styles/common.css';
const images = Object.values(import.meta.glob('../../../../src/Images2/Solidworks/*.{jpeg,jpg,png}', { eager: true })).map(module => module.default);

console.log(images)
const Solidworks = () => {
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openFullscreen = (index) => {
        setCurrentIndex(index);
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };

    const showPrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const showNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
        <h1>Solidworks</h1>
        <div className="gallery-container">
           
            <div className="gallery">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Image ${index + 1}`}
                        loading="lazy" 
                        onClick={() => openFullscreen(index)}
                    />
                ))}
            </div>

            {isFullscreen && (
                <div className="fullscreen-overlay" onClick={closeFullscreen}>
                    <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                    <button className="close" onClick={closeFullscreen}>×</button>
                    <button className="prev" onClick={(e) => {e.stopPropagation(); showPrev();}}>‹</button>
                    <button className="next" onClick={(e) => {e.stopPropagation(); showNext();}}>›</button>
                </div>
            )}
        </div>
        </> 
    );
};

export default Solidworks;
