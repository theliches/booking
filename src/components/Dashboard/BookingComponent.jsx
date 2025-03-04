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

  // Fetch rooms from Supabase
  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from('rooms').select('*');
      if (error) {
        console.error("Error fetching rooms:", error);
        alert("Kunne ikke hente lokaler. Prøv igen senere.");
      } else {
        console.log("Hentede lokaler:", data); // Debugging
        setRooms(data);
        setFilteredRooms(data); // Initially show all rooms
      }
    };

    fetchRooms();
  }, []);

  // Filter rooms based on the selected filters
  useEffect(() => {
    const filterRooms = () => {
      const filtered = rooms.filter((room) => {
        console.log(`Filtrering: Dato=${room.date}, Tid=${room.time}, Type=${room.type}`); // Debugging
        return (
          (!date || room.date === date) &&
          (!time || room.time.includes(time)) && // Match substring of time
          (!roomType || room.type.toLowerCase() === roomType.toLowerCase())
        );
      });
      setFilteredRooms(filtered);

      if (filtered.length === 0) {
        console.log("Ingen ledige lokaler fundet.");
      }
    };

    filterRooms();
  }, [date, time, roomType, rooms]);

  const handleBooking = async (roomId) => {
    if (!roomId || !date || !time) {
      alert("Alle felter skal udfyldes!");
      return;
    }

    const { data, error } = await supabase
      .from("bookings")
      .insert([{ room_id: roomId, date, time }]);

    if (error) {
      console.error("Fejl ved booking:", error.message);
      alert("Kunne ikke booke lokalet. Prøv igen.");
    } else {
      alert("Lokale booket succesfuldt!");
      console.log("Booking data:", data);
    }
  };

  return (
    <div className="booking-container">
      <h1>Book Lokale</h1>
      <div className="filter-fields">
        <div className="filter-field">
          <label htmlFor="date">Dato:</label>
          <select id="date" value={date} onChange={(e) => setDate(e.target.value)}>
            <option value="">Vælg dato</option>
            <option value="2024-12-19">2024-12-19</option>
            <option value="2024-12-22">2024-12-22</option>
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="time">Tid:</label>
          <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Vælg tid</option>
            <option value="09:00-10:00">09:00-10:00</option>
            <option value="10:00-11:00">10:00-11:00</option>
            <option value="14:00-15:00">14:00-15:00</option>
          </select>
        </div>
        <div className="filter-field">
          <label htmlFor="roomType">Lokale Type:</label>
          <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
            <option value="">Vælg lokale type</option>
            <option value="Kontor">Kontor</option>
            <option value="Mødelokale">Mødelokale</option>
            <option value="Undervisningslokale">Undervisningslokale</option>
          </select>
        </div>
        <button className="search-button">Søg nu</button>
      </div>

      <div className="results-container">
        <h2>Ledige lokaler:</h2>
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room) => (
            <div key={room.id} className="result-box">
              <div>{room.name}</div>
              <div>{room.capacity} pers., {room.equipment}</div>
              <div>{room.time}, {room.date}</div>
              <button
                className="book-button"
                onClick={() => handleBooking(room.id)}
              >
                BOOK HER
              </button>
            </div>
          ))
        ) : (
          <p>Ingen lokaler fundet.</p>
        )}
      </div>
    </div>
  );
};

export default BookingComponent;
