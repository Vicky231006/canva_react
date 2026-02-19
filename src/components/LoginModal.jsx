import React, { useState } from 'react';

const LoginModal = ({ isOpen, onClose, onLoginSuccess }) => {
    // Initialize state from localStorage if available
    const [email, setEmail] = useState(() => localStorage.getItem('login_email') || '');
    const [password, setPassword] = useState(() => localStorage.getItem('login_password') || '');
    const [errors, setErrors] = useState({ email: '', password: '' });

    if (!isOpen) return null;

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        localStorage.setItem('login_email', value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        localStorage.setItem('login_password', value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        const newErrors = { email: '', password: '' };

        // Email Validation
        const emailValue = email.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!emailPattern.test(emailValue)) {
            newErrors.email = 'Please enter a valid email address.';
            isValid = false;
        }

        // Password Validation
        const passwordValue = password.trim();
        if (passwordValue === '') {
            newErrors.password = 'Password is required.';
            isValid = false;
        } else if (passwordValue.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            const username = emailValue.split('@')[0];
            onLoginSuccess(username);

            // Clear persistent storage on successful login
            localStorage.removeItem('login_email');
            localStorage.removeItem('login_password');

            // Allow the state update to propagate before closing
            setTimeout(() => {
                alert(`Login Successful! Welcome, ${username}.`);
                // Clear form
                setEmail('');
                setPassword('');
                setErrors({ email: '', password: '' });
                onClose();
            }, 100);
        }
    };

    return (
        <div
            className={`modal-overlay ${isOpen ? 'show' : ''}`}
            id="login-modal"
            onClick={(e) => {
                if (e.target.className === 'modal-overlay show') onClose();
            }}
        >
            <div className="modal-content">
                <button className="close-modal" onClick={onClose}>&times;</button>
                <h2>Welcome back</h2>
                <form id="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={handleEmailChange}
                            className={errors.email ? 'border-error' : ''}
                        />
                        <small className="error-msg" id="email-error">{errors.email}</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                            className={errors.password ? 'border-error' : ''}
                        />
                        <small className="error-msg" id="password-error">{errors.password}</small>
                    </div>
                    <button type="submit" className="btn-primary-full">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default LoginModal;
