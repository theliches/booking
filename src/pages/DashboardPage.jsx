import React from 'react';
import BookingListComponent from '../components/Dashboard/BookingListComponent';

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <BookingListComponent />
    </div>
  );
};

export default DashboardPage;
