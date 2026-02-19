import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Explore from './components/Explore';
import ImageGenerator from './components/ImageGenerator';
import BusinessFeatures from './components/BusinessFeatures';
import Templates from './components/Templates';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Initialize user state directly from localStorage to persist across refreshes
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('canva_user');
    return storedUser ? { name: storedUser } : null;
  });

  // Removed useEffect for loading user as it's now handled in initial state

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginSuccess = (username) => {
    localStorage.setItem('canva_user', username);
    setUser({ name: username });
  };

  const handleLogout = () => {
    localStorage.removeItem('canva_user');
    setUser(null);
  };

  return (
    <div className="main-wrapper">
      <Navbar
        onLoginClick={handleLoginClick}
        user={user}
        onLogout={handleLogout}
      />

      <Hero />
      <Explore />
      <ImageGenerator />
      <BusinessFeatures />
      <Templates />
      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={handleCloseModal}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
}

export default App;