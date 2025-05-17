import React from 'react';
import './Dashboard.css';
import History from './DashboardCompHistory/History';
import Progress from './DashboardCompProgress/Progress';
import GoalPlanner from './DashboardCompGoalPlanner/GoalPlanner';
import TargetBalance from './DashboardCompTargetBalance/TargetBalance';
import LimitByCategory from './DashboardCompLimitByCategory/LimitByCategory';
import TransactionLimits from './DashboardCompTransactionLimits/TransactionLimits';
import TransferAndSetGoal from './DashboardCompTransferAndSetGoal/TransferAndSetGoal';

function Dashboard() {
    // Mock data for the components (replace with your actual data)
    const limitsData = [
        { name: 'Food', spent: 985.00, limit: 2500.00 },
        { name: 'Shopping', spent: 1415.00, limit: 1500.00 },
        { name: 'Bills', spent: 2134.00, limit: 3000.00 },
        { name: 'Others', spent: 523.00, limit: 1000.00 },
    ];

    const goalDetailsData = [
        { name: 'Camera', targetAmount: 24000 },
        { name: 'Others', targetAmount: 150 },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Dashboard</h1>
                <TransferAndSetGoal />
            </div>

            <div className="dashboard-grid">
                <div className="left-column">
                    <div className="overview-card"> {/* New container for the overview components */}
                        <div className="available-balance-card">
                            <h2>Available Balance</h2>
                            <p className="available-balance">₱150.00</p>
                        </div>
                        <TargetBalance targetBalance={150} remainingToGoal={150} />
                        <TransactionLimits remaining={100} weeklyLimit={2500} />
                        <LimitByCategory limits={limitsData} />
                        <GoalPlanner
                            progress={80}
                            targetBalance={24000}
                            currentBalance={19200}
                            goalDetails={goalDetailsData}
                        />
                    </div>
                </div>

                <div className="right-column">
                    <Progress />
                    <History />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;