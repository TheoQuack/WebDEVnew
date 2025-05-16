import React from 'react';
import './dashboardcss.css'; // Import the CSS file

function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="sidebar">
                {/* Sidebar content would go here in a real application */}
            </div>
            <div className="main-content-grid">
                <div className="left-column">
                    <div className="balance-card">
                        <h2>Available Balance</h2>
                        <p className="available-balance">₱150.00</p>
                        <div className="target-balance">
                            <span>Target Balance</span>
                            <span>₱150.00</span>
                        </div>
                    </div>

                    <div className="limits-card">
                        <h2>Transaction Limits</h2>
                        <p>Remaining this week: ₱100.00</p>
                        <h2>Limit by Category</h2>
                        {/* ... (rest of the limits card) ... */}
                        <div className="limit-category">
                            <div className="limit-category-item">
                                <span>Food</span>
                                <span>₱985.00 of ₱2500.00</span>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar food-progress"></div>
                            </div>
                        </div>
                        <div className="limit-category">
                            <div className="limit-category-item">
                                <span>Shopping</span>
                                <span>₱1415.00 of ₱1500.00</span>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar shopping-progress"></div>
                            </div>
                        </div>
                        <div className="limit-category">
                            <div className="limit-category-item">
                                <span>Bills</span>
                                <span>₱2134.00 of ₱3000.00</span>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar bills-progress"></div>
                            </div>
                        </div>
                        <div className="limit-category">
                            <div className="limit-category-item">
                                <span>Others</span>
                                <span>₱523.00 of ₱1000.00</span>
                            </div>
                            <div className="progress-bar-container">
                                <div className="progress-bar others-progress"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-column">
                    <div className="goal-planner-card">
                        <h2>Goal Planner</h2>
                        <p>Track your Savings</p>
                        <div className="goal-circle-container">
                            <div className="goal-circle">80%</div>
                        </div>
                        <p>Remaining to Goal: ₱150.00</p>
                        <div className="goal-detail">
                            <h2>Goal Detail</h2>
                            <div className="goal-detail-item">
                                <span>Camera</span>
                                <span>₱24000.00</span>
                            </div>
                            <div className="goal-detail-item">
                                <span>Others</span>
                                <span>₱150.00</span>
                            </div>
                        </div>
                    </div>

                    <div className="progress-card">
                        <h2>Progress</h2>
                        <div className="progress-steps">
                            <div className="step active">1</div>
                            <div className="step">2</div>
                            <div className="step">3</div>
                            <span>📈</span>
                        </div>
                    </div>

                    <div className="history-card">
                        <h2>History</h2>
                        {/* ... (rest of the history card) ... */}
                        <div className="history-item">
                            <div className="transaction-details">
                                <span>10/10/2025</span>
                                <span className="transaction-type">GROCERY</span>
                            </div>
                            <span className="pending">PENDING</span>
                        </div>
                        <div className="history-item">
                            <div className="transaction-details">
                                <span>10/10/1999</span>
                                <span className="transaction-type">SALARY</span>
                            </div>
                            <span className="transaction-amount">+₱300.00</span>
                        </div>
                        <div className="history-item">
                            <div className="transaction-details">
                                <span>09/10/1999</span>
                                <span className="transaction-type">ELECTRIC BILL</span>
                            </div>
                            <span className="transaction-amount">-₱120.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;