
import './App.css'
import History from './components/DashboardCompHistory/History'
import GoalPlanner from './components/DashboardCompGoalPlanner/GoalPlanner'
import TargetBalance from './components/DashboardCompTargetBalance/TargetBalance'
import LimitByCategory from './components/DashboardCompLimitByCategory/LimitByCategory'
import TransactionLimits from './components/DashboardCompTransactionLimits/TransactionLimits'
import TransferAndSetGoal from './components/DashboardCompTransferAndSetGoal/TransferAndSetGoal'
import Progress from './components/DashboardCompProgress/Progress'
import Dashboard from './components/Dashboard'
import PopupSidebar from './components/DashboardCompSideBar/Sidebar'



function App() {

   return (
    <div style={{ display: 'grid', gridTemplateColumns: '10% 80% 10%', gap: '20px', padding: '2px' }}>
      <div>
        <PopupSidebar />
      </div>
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App
