import React from 'react';

const Templates = () => {
    return (
        <section className="templates">
            <div className="section-container">
                <h2 className="section-title">Templates for absolutely anything</h2>
                <button className="btn-secondary browse-btn">Browse all templates</button>

                <div className="template-grid">
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1529636798458-92182e662485?w=400&q=80" alt="Kitty Party" loading="lazy" />
                    </div>
                    <div className="template-card template-card-wide">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80" alt="Happy Holi Wide" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=400&q=80" alt="Ganesh Chaturthi" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1544124499-58912cbddaad?w=400&q=80" alt="Diwali" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                    <div className="template-card">
                        <img src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80" alt="Template" loading="lazy" />
                    </div>
                </div>

                <div className="premium-container">
                    <p className="premium-text">
                        Unlock premium templates, more powerful design tools & AI features with a Canva plan. <a href="#">Educational institutions</a> and <a href="#">non-profits</a> can use Canva's premium features for free.
                    </p>
                    <button className="btn-premium-plans">
                        <svg className="crown-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"></path>
                        </svg>
                        See plans and pricing
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Templates;
