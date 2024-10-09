import React, { useState, useEffect } from 'react';
import '../styles/common.css';

const Farewell = () => {
    const [images, setImages] = useState([]);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Asynchronously load images using import.meta.glob
    useEffect(() => {
        const loadImages = async () => {
            const imageModules = Object.values(import.meta.glob('../../../../src/Images2/Farewell/*.jpeg'));
            const loadedImages = await Promise.all(imageModules.map(module => module()));
            const imagePaths = loadedImages.map(image => image.default);
            setImages(imagePaths);
        };

        loadImages(); // Load images when the component mounts
    }, []); // Empty dependency array to run only on component mount

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

    if (images.length === 0) {
        return <p>Loading images...</p>; // Show loading text if images are not loaded yet
    }

    return (
        <div className="gallery-container">
            <h1>Farewell</h1>
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
                <div className="fullscreen-overlay-gallery" onClick={closeFullscreen}>
                    <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                    <button className="close" onClick={closeFullscreen}>×</button>
                    <button className="prev" onClick={(e) => {e.stopPropagation(); showPrev();}}>‹</button>
                    <button className="next" onClick={(e) => {e.stopPropagation(); showNext();}}>›</button>
                </div>
            )}
        </div>
    );
};

export default Farewell;
