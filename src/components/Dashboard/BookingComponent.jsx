import React, { useState, useEffect } from "react";
import "./BookingComponent.css";
import { getSupabaseClient } from "../../../supabase/getSupabaseClient";

const supabase = getSupabaseClient();

const BookingComponent = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [roomType, setRoomType] = useState('');
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from('rooms').select('*');
      if (error) {
        console.error('Error fetching rooms:', error);
      } else {
        setRooms(data);
      }
    };

    fetchRooms();
  }, []);

  const handleFilter = () => {
    const filtered = rooms.filter(room => {
      return (
        (!date || room.date === date) &&
        (!time || room.time === time) &&
        (!roomType || room.type === roomType)
      );
    });
    setFilteredRooms(filtered);
  };

  const handleBooking = async (roomId) => {
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ room_id: roomId, date, time }]);
    if (error) {
      console.error('Fejl ved booking af lokale:', error);
    } else {
      alert('Lokale booket succesfuldt!');
    }
  };

  return (
    <div className="booking-container">
      <div className="filter-fields">
        <div className="filter-field">
          <label htmlFor="date">Dato:</label>
          <select id="date" value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="">12. December</option>
            <option value="2024-12-19">19. December</option>
            <option value="2024-12-22">22. December</option>
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="time">Tid:</label>
          <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">09:00</option>
            <option value="10:00">10:00</option>
            <option value="14:00">14:00</option>
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="roomType">Lokale Type:</label>
          <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="">Kontor</option>
            <option value="Mødelokale">Mødelokale</option>
            <option value="Undervisningslokale">Undervisningslokale</option>
          </select>
        </div>
        <button className="search-button" onClick={handleFilter}>Søg nu</button>
      </div>

      <div className="results-and-bookings">
        <div className="results-container">
          <h2>Ledige lokaler: I dag</h2>
          {filteredRooms.map(room => (
            <div key={room.id} className="result-box">
              <div>{room.name}</div>
              <div>{room.capacity} pers., {room.equipment}</div>
              <div>{room.time}, {room.date}</div>
              <button className="book-button" onClick={() => handleBooking(room.id)}>BOOK HER</button>
            </div>
          ))}
        </div>

        <div className="my-bookings">
          <h2>Mine bookinger</h2>
          {/* Example of user bookings */}
          <div className="booking-box">
            <div>Lokale 3.11</div>
            <div>10:00-11:00, 13 NOV 2024</div>
            <button className="cancel-button">AFLYS</button>
          </div>
          <div className="booking-box">
            <div>Lokale 3.12</div>
            <div>11:00-12:00, 13 NOV 2024</div>
            <button className="cancel-button">AFLYS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingComponent;
