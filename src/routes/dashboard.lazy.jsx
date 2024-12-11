// dashboard.lazy.jsx
import { lazy, Suspense } from 'react';
import Sidebar from '../components/Sidebar';

const DashboardContent = lazy(() => import('../components/Dashboard'));



const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar style={{ width: '250px' }} />  {/* Set the sidebar width */}
      
      <div style={{ flex: 1, padding: '20px' }}>
        <Suspense fallback={<div>Loading dashboard...</div>}>
          <DashboardContent />  {/* Lazy-loaded dashboard content */}
        </Suspense>
      </div>
    </div>
  );
};

export default Dashboard;
