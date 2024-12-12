import React, { useState, useEffect } from "react";
import { getSupabaseClient } from "../../../supabase/getSupabaseClient";
import "./BookingListComponent.css";

const supabase = getSupabaseClient();

const BookingListComponent = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const { data, error } = await supabase.from('bookings').select(`
        id,
        date,
        time,
        rooms (
          name
        )
      `);
      if (error) {
        console.error('Error fetching bookings:', error);
      } else {
        console.log('Fetched bookings:', data);
        setBookings(data);
      }
    };

    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    const { error } = await supabase.from('bookings').delete().match({ id: bookingId });
    if (error) {
      console.error('Error cancelling booking:', error);
    } else {
      alert('Booking cancelled successfully!');
      // Update the list of bookings after cancellation
      setBookings(bookings.filter(booking => booking.id !== bookingId));
    }
  };

  return (
    <div className="my-bookings">
      <h2>Mine bookinger</h2>
      {bookings.map(booking => (
        <div key={booking.id} className="booking-box">
          <div>{booking.rooms.name}</div>
          <div>{booking.time}, {new Date(booking.date).toLocaleDateString('da-DK')}</div>
          <button className="cancel-button" onClick={() => handleCancel(booking.id)}>AFLYS</button>
        </div>
      ))}
    </div>
  );
};

export default BookingListComponent;
