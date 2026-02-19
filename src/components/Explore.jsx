import React, { useState } from 'react';

const Explore = () => {
    const [activeTab, setActiveTab] = useState('Try it now');
    const tabs = ['Try it now', 'AI', 'Presentation', 'Social Media', 'Print', 'Video', 'Education'];

    // Define the content for each card
    const allCards = [
        {
            id: 'ai-text',
            className: 'feature-card feature-card-large',
            content: (
                <>
                    <div className="feature-card-content">
                        <h3>Watch your words turn into production-quality visuals with AI</h3>
                        <button className="btn-mini">Generate media</button>
                    </div>
                    <div className="feature-visual">
                        <div className="ai-gallery">
                            <img src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=400&q=80" alt="AI Generated" />
                            <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&q=80" alt="AI Generated" />
                            <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80" alt="AI Generated" />
                        </div>
                        <div className="ai-prompt-overlay">
                            <input type="text" value="Surreal backgrounds, ultra realistic, colorful" readOnly />
                            <button className="generate-btn-small">✨ Create</button>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 'bg-remover',
            className: 'feature-card feature-card-yellow',
            content: (
                <>
                    <h3>Bye-bye background, in a single click</h3>
                    <button className="btn-mini">Remove background</button>
                    <div className="feature-image">
                        <img src="/image.png" alt="Woman smiling" />
                    </div>
                </>
            )
        },
        {
            id: 'presentation',
            className: 'feature-card feature-card-pink',
            content: (
                <>
                    <h3>Design, present & inspire with presentations</h3>
                    <button className="btn-mini">Create a presentation</button>
                    <div className="feature-image">
                        <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80" alt="Presentation" />
                    </div>
                </>
            )
        },
        {
            id: 'social',
            className: 'feature-card feature-card-blue',
            content: (
                <>
                    <h3>Create scroll-stopping social media content for any platform</h3>
                    <button className="btn-mini">Design for social media</button>
                    <div className="feature-visual-social">
                        <div className="social-icons-grid">
                            <div className="icon-box"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="IG" /></div>
                            <div className="icon-box"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" /></div>
                            <div className="icon-box"><img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png" alt="Pin" /></div>
                            <div className="icon-box"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png" alt="X" /></div>
                            <div className="icon-box"><img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="FB" /></div>
                            <div className="icon-box"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="In" /></div>
                        </div>
                    </div>
                </>
            )
        },
        {
            id: 'video',
            className: 'feature-card feature-card-teal',
            content: (
                <>
                    <h3>Make your videos look awesome on any screen</h3>
                    <button className="btn-mini">Edit a video</button>
                    <div className="feature-image-wide">
                        <img src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800&q=80" alt="Video editing" />
                    </div>
                </>
            )
        },
        {
            id: 'editor',
            className: 'feature-card feature-card-orange',
            content: (
                <>
                    <h3>Make easy edits with an AI-powered editor</h3>
                    <button className="btn-mini">Edit an image</button>
                    <div className="feature-image">
                        <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80" alt="Image editing" />
                    </div>
                </>
            )
        }
    ];

    // Function to get ordered cards based on activeTab
    const getOrderedCards = () => {
        const cards = [...allCards]; // Create a copy

        switch (activeTab) {
            case 'AI':
                // Bring AI related cards (0 and 5) to top
                return [cards[0], cards[5], cards[1], cards[2], cards[3], cards[4]];
            case 'Presentation':
                // Bring Presentation (2) to top
                return [cards[2], cards[0], cards[1], cards[3], cards[4], cards[5]];
            case 'Social Media':
                // Bring Social (3) and Video (4) to top/focused positions
                return [cards[3], cards[4], cards[0], cards[1], cards[2], cards[5]];
            case 'Print':
                // Random shuffle for demo
                return [cards[1], cards[3], cards[5], cards[0], cards[2], cards[4]];
            case 'Video':
                // Bring Video (4) to top
                return [cards[4], cards[3], cards[0], cards[1], cards[2], cards[5]];
            case 'Education':
                // Reverse order
                return [...cards].reverse();
            case 'Try it now':
            default:
                return cards;
        }
    };

    const orderedCards = getOrderedCards();

    return (
        <section className="explore" id="explore-section">
            <div className="section-container">
                <h2 className="section-title">Explore Canva's Templates and AI Tools</h2>
                <div className="tab-nav-container">
                    <div className="tab-nav">
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={`tab-btn ${activeTab === tab ? 'active-gradient' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="explore-grid">
                    {/* Row 1 */}
                    <div className="grid-row row-1">
                        <div className={orderedCards[0].className}>
                            {orderedCards[0].content}
                        </div>
                        <div className={orderedCards[1].className}>
                            {orderedCards[1].content}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid-row row-2">
                        <div className={orderedCards[2].className}>
                            {orderedCards[2].content}
                        </div>
                        <div className={orderedCards[3].className}>
                            {orderedCards[3].content}
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="grid-row row-3">
                        <div className={orderedCards[4].className}>
                            {orderedCards[4].content}
                        </div>
                        <div className={orderedCards[5].className}>
                            {orderedCards[5].content}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
