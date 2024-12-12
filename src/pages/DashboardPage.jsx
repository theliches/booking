import Header from "../components/common/Header";
import { Link } from 'react-router-dom';
import React from "react";
import BookingListComponent from "../components/dashboard/BookingListComponent";

const DashboardPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title='Dashboard' />

      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        <div className="booking-page">
          <BookingListComponent />
        </div>
      </main>
</div>
    
  );
};

export default DashboardPage;
