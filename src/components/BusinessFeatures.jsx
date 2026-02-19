import React from 'react';

const BusinessFeatures = () => {
    return (
        <section className="business-features">
            <div className="section-container">
                <h2 className="section-title">Our Business Features</h2>
                <p className="section-subtitle">
                    Enhance the design capabilities of your team or your entire business with
                    Canva's business plans! To enquire about our Enterprise plan, please contact us <a href="#">here</a>!
                </p>

                <div className="business-grid">
                    <div className="business-card">
                        <h3>Set up a Brand Kit to unify your designs</h3>
                        <button className="btn-secondary">Learn more</button>
                        <div className="business-image">
                            <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80" alt="Brand Kit" loading="lazy" />
                        </div>
                    </div>
                    <div className="business-card">
                        <h3>Empower your team to scale content</h3>
                        <button className="btn-secondary">Learn more</button>
                        <div className="business-image">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Team collaboration" loading="lazy" />
                        </div>
                    </div>
                    <div className="business-card">
                        <h3>Collaborate & create in real time</h3>
                        <button className="btn-secondary">View plans</button>
                        <div className="business-image">
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" alt="Real-time collaboration" loading="lazy" />
                        </div>
                    </div>
                    <div className="business-card">
                        <h3>Plan and schedule your content</h3>
                        <button className="btn-secondary">Content Planner</button>
                        <div className="business-image">
                            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&q=80" alt="Content planning" loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessFeatures;
