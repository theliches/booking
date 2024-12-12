import React from 'react';
import BookingListComponent from '../components/Dashboard/BookingListComponent';

const MyBookingPage = () => {
  return (
    <div className="my-booking-page">
      <h1>Mine Bookinger</h1>
      <BookingListComponent />
    </div>
  );
};

export default MyBookingPage;
