import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';
import FullscreenModal from './FullscreenModal';

// Import all images
import solidworkPoster from '../../Posters/Posters/solidwork.jpg';
import rocketPoster from '../../Posters/Posters/blue-birds-nest-shape-rocket.jpg';
import centrePoster from '../../Posters/Posters/soap-bubble-2403673_1280.jpg';
import junkyardPoster from '../../Posters/Posters/ai-generated-8208568_1280.jpg';
import farewellPoster from '../../Posters/Posters/farewell.jpeg';

function GalleryItem() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState("");

    const slides = [
        {
            image: solidworkPoster,
            name: "Solidworks and 3D Printing",
            link: "/gallery/solidworks"
        },
        {
            image: rocketPoster,
            name: "Water Rocket",
            link: "/gallery/water-rocket"
        },
        {
            image: centrePoster,
            name: "Centre O Fun",
            link: "/gallery/centre-o-fun"
        },
        {
            image: junkyardPoster,
            name: "Junkyard Wars",
            link: "/gallery/junkyard-wars"
        },
        {
            image: farewellPoster,
            name: "Farewell",
            link: "/gallery/farewell"
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const openModal = (image) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalPrev = () => {
        const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setModalImage(slides[newIndex].image);
    };

    const handleModalNext = () => {
        const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setModalImage(slides[newIndex].image);
    };

    return (
        <div className="Gallerycontainer">
            <div className="static-title">
                <h1 className="description">Gallery</h1>
            </div>
            <div className="carousel">
                <div 
                    className={`main-slide zoom-in`} 
                    style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
                >
                    <div className="Gallerycontent">
                        <div className="name">{slides[currentIndex].name}</div>
                        <Link to={slides[currentIndex].link}>
                            <button className="see-more-button">See More</button>
                        </Link>
                    </div>
                </div>
                <div className="preview-Gallerycontainer">
                    <div 
                        className="preview-slide" 
                        style={{ 
                            backgroundImage: `url(${slides[(currentIndex + 1) % slides.length].image})`
                        }}
                    ></div>
                    <div 
                        className="preview-slide" 
                        style={{ 
                            backgroundImage: `url(${slides[(currentIndex + 2) % slides.length].image})`
                        }}
                    ></div>
                </div>
                <div className="carousel-controls">
                    <button className="prev-button" onClick={handlePrev}>Prev</button>
                    <button className="next-button" onClick={handleNext}>Next</button>
                </div>
            </div>

            {isModalOpen && (
                <FullscreenModal
                    isOpen={isModalOpen}
                    image={modalImage}
                    onClose={closeModal}
                    onPrev={handleModalPrev}
                    onNext={handleModalNext}
                />
            )}
        </div>
    );
}

export default GalleryItem;
