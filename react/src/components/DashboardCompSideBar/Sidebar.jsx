import React from 'react';
import './Sidebar.css';
import { User, Phone, Mail, MessageSquare, LogOut } from 'lucide-react'; // Install if you haven't: npm install lucide-react

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="profile-section">
                <div className="profile-icon">
                    <User />
                </div>
                <div className="profile-text">
                    <span className="profile-label">Profile</span>
                </div>
            </div>

            <div className="contact-info">
                <span className="contact-label">Contact Number</span>
                <p className="contact-value">+63 912 345 6789</p>
            </div>

            <div className="email-info">
                <span className="email-label">Email Address</span>
                <p className="email-value">user@example.com</p>
            </div>

            <button className="feedback-button">
                <MessageSquare className="feedback-icon" />
                Feedback
            </button>

            <div className="app-description">
                <p>WALL-ET is a centralized online financial platform designed for Philippine users to simplify money management. It offers tools for budgeting, saving, and tracking expenses, empowering users to achieve financial goals with ease and convenience.</p>
            </div>

            <button className="logout-button">
                <LogOut className="logout-icon" />
                Logout
            </button>
        </div>
    );
}

export default Sidebar;