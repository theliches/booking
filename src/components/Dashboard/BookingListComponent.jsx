import React, { useState, useEffect } from "react";
import { getSupabaseClient } from "../../../supabase/getSupabaseClient";
import { Link } from 'react-router-dom';
import "./BookingListComponent.css";
import "../../index.css";

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
        console.error("Fejl ved hentning af bookinger:", error.message);
        return;
      }

      console.log("Bookinger hentet:", data);
      setBookings(data || []);
    };

    fetchBookings();
  }, []);

  const handleCancel = async (bookingId) => {
    const { error } = await supabase.from('bookings').delete().match({ id: bookingId });

    if (error) {
      console.error("Fejl ved aflysning af booking:", error.message);
    } else {
      alert("Booking aflyst succesfuldt!");
      setBookings(prev => prev.filter(booking => booking.id !== bookingId));
    }
  };

  return (
    <div className="my-bookings">
      <h2>Mine bookinger</h2>
      {bookings.length > 0 ? (
        bookings.map(booking => (
          <div key={booking.id} className="booking-box">
            <div className="room-name">{booking.rooms?.name || "Ukendt lokale"}</div>
            <div className="booking-details">
              {booking.time}, {booking.date ? new Date(booking.date).toLocaleDateString("da-DK") : "Ukendt dato"}
            </div>
            <button className="cancel-button" onClick={() => handleCancel(booking.id)}>AFLYS</button>
          </div>
        ))
      ) : (
        <div>
          <p>Ingen bookinger fundet.</p>
          <Link to="/booking">
            <button className="go-to-booking-button">
              Gå til booking
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BookingListComponent;
