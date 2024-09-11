import React from 'react';
import './LoadingIcon.css';

function LoadingIcon() {
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <div className="loading-text">Loading...</div>
        </div>
    );
}

export default LoadingIcon;
