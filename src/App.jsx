import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Sidebar from './components/common/Sidebar';
import DashboardPage from './pages/DashboardPage';
import BookingPage from './pages/BookingPage';
import MyBookingPage from './pages/MyBookingPage';
import RoomOverviewPage from './pages/RoomOverviewPage';
import MedialabPage from './pages/MedialabPage';
import MakerlabPage from './pages/MakerlabPage';
import AuditoriumPage from './pages/AuditoriumPage';
import LoginRegisterPage from './pages/LoginRegisterPage';

const App = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className={`flex h-screen overflow-hidden ${isAuthPage ? 'bg-gray-900 text-gray-100' : ''}`}>
      {/* Sidebar for non-auth pages */}
      {!isAuthPage && <Sidebar />}
      <div className="flex-1 relative z-10">
        {!isAuthPage && (
          <div className="absolute inset-0">
            <div className="bg-white opacity-100 w-full h-full"></div>
            <div className="bg-gray-900 opacity-50 w-full h-full absolute"></div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<LoginRegisterPage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/mybooking" element={<MyBookingPage />} />
          <Route path="/room-overview" element={<RoomOverviewPage />} />
          <Route path="/medialab" element={<MedialabPage />} />
          <Route path="/makerlab" element={<MakerlabPage />} />
          <Route path="/auditorium" element={<AuditoriumPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
