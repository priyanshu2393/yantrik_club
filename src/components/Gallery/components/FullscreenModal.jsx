import React from 'react';
import '../styles/common.css';
function FullscreenModal({ isOpen, image, onClose, onPrev, onNext }) {
    if (!isOpen) return null;

    return (
        <div className="fullscreen-modal">
            <div className="modal-content">
                <img src={image} alt="Fullscreen" className="modal-image" />
                <button className="close-button" onClick={onClose}>Close</button>
                <button className="prev-button" onClick={onPrev}>Prev</button>
                <button className="next-button" onClick={onNext}>Next</button>
            </div>
        </div>
    );
}

export default FullscreenModal;

