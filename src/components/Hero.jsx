import React from 'react';

const Hero = () => {
    return (
        <section className="hero main-gradient-bg">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">Where heart meets art</h1>
                    <p className="hero-subtitle">Canva makes it easy to create and share professional designs.</p>
                    <button className="btn-hero-white">Sign up and start designing</button>
                </div>
                <div className="hero-image">
                    <div className="hero-card">
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="hero-video"
                            poster="/image.png"
                            preload="auto"
                        >
                            <source src="/canva_jadu_dadu_hin_16_9.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
