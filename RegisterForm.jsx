import { useState } from 'react';
import React from 'react';
import './RegisterForm.css'; // Assuming you have a CSS file for styling

function RegisterForm({ onRegister }) {
    const [formData, setFormData] = useState({ username: '', password: '' });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(formData);
    }

    return (
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>Register</h2>
            <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Register</button>
            <p>Already have an account? <a href="./LoginForm">Login</a></p>
            <p>Forgot your password? <a href="/reset-password">Reset Password</a></p>
        </form>
    );
}

export default RegisterForm;

