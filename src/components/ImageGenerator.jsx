import React, { useState } from 'react';

const ImageGenerator = () => {
    const [mainImage, setMainImage] = useState('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80');
    const [isImageLoading, setIsImageLoading] = useState(false);

    const handleStyleClick = (src) => {
        // High-res logic from the original JS
        let newSrc = src;
        if (newSrc.includes('unsplash.com')) {
            newSrc = newSrc.replace(/w=\d+/, 'w=800').replace(/q=\d+/, 'q=90');
        }

        setIsImageLoading(true);
        const img = new Image();
        img.src = newSrc;
        img.onload = () => {
            setMainImage(newSrc);
            setIsImageLoading(false);
        };
    };

    const styleOptions = [
        { name: 'Dreamy', src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&q=80' },
        { name: 'Anime', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=100&q=80' },
        { name: 'Watercolor', src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=100&q=80' },
        { name: 'Filmic', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=100&q=80' }
    ];

    return (
        <section className="image-generator">
            <div className="section-container">
                <div className="generator-grid">
                    <div className="generator-content">
                        <h2 className="section-title-left">Try Image Generator</h2>
                        <p className="section-subtitle-left">
                            Turn pure text to art with Magic Media™ and our range of AI art
                            generator tools. Simply enter a prompt, pick a style, and watch your words transform into
                            beautiful art.
                        </p>

                        <div className="generator-input-group">
                            <div className="generator-form-container">
                                <div className="input-pill-wrapper">
                                    <span className="search-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#paint0_linear)" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <defs>
                                                <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="21.02" gradientUnits="userSpaceOnUse">
                                                    <stop stopColor="#C084FC" />
                                                    <stop offset="1" stopColor="#8B5CF6" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </span>
                                    <input type="text" defaultValue="Moon rising over the mountains" readOnly />
                                    <span className="clear-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#9CA3AF" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#D1D5DB" />
                                            <path d="M15 9L9 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M9 9L15 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </span>
                                </div>
                                <button className="btn-purple-pill">Generate</button>
                            </div>
                        </div>
                    </div>

                    <div className="generator-visual">
                        <img
                            src={mainImage}
                            alt="Generated artwork"
                            className="gen-main-img"
                            style={{ opacity: isImageLoading ? 0.5 : 1 }}
                        />
                        <div className="style-picker-overlay">
                            {styleOptions.map((style) => (
                                <button key={style.name} className="style-option" onClick={() => handleStyleClick(style.src)}>
                                    <img src={style.src} alt={style.name} />
                                    <span>{style.name}</span>
                                </button>
                            ))}
                            <button className="style-btn more more-btn">
                                <span>20+</span>
                                <span>More</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageGenerator;
