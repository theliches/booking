import React from "react";
import "./RoomList.css";

const RoomList = () => {
  const rooms = [
    { id: 1, name: "Kontor 2.11", capacity: 4, equipment: "Projektor, Whiteboard", type: "Kontor" },
    { id: 2, name: "Mødelokale 3.52", capacity: 10, equipment: "Konferencebord, TV", type: "Mødelokale" },
    { id: 3, name: "Undervisningslokale 1.26", capacity: 30, equipment: "Tavle, Projektor", type: "Undervisningslokale" },
    { id: 4, name: "Kontor 5.21", capacity: 2, equipment: "Tavle", type: "Kontor" },
    { id: 5, name: "Mødelokale 4.21", capacity: 12, equipment: "Projektor", type: "Mødelokale" },
  ];

  return (
    <div className="room-list-container">
      <h2>Tilgængelige Lokaler</h2>
      {rooms.length > 0 ? (
        rooms.map((room) => (
          <div key={room.id} className="room-box">
            <div className="room-name">{room.name}</div>
            <div className="room-details">
              {room.capacity} personer, {room.equipment}
            </div>
            <button className="book-button">BOOK NU</button>
          </div>
        ))
      ) : (
        <p>Ingen lokaler fundet.</p>
      )}
    </div>
  );
};

export default RoomList;
