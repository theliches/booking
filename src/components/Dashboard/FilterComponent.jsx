import React, { useState } from 'react';
import './FilterComponent.css';

const FilterComponent = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [roomType, setRoomType] = useState('');

    return (
        <div className="filter-container">
            <h1>Find Lokale</h1>
            <div className="filter-fields">
                <div className="filter-field">
                    <label htmlFor="date">Dato:</label>
                    <select id="date" value={date} onChange={(e) => setDate(e.target.value)}>
                        <option value="">12. Decemeber</option>
                        <option value="2023-10-01">19. Decemeber </option>
                        <option value="2023-10-02">22. Decemeber</option>
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
                    <label htmlFor="roomType">Lokale Type</label>
                    <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                        <option value="">Kontor</option>
                        <option value="Moedelokale">Mødelokale</option>
                        <option value="Undervisningslokale">Mødelokale</option>
                    </select>
                </div>
                <button className="search-button" onClick={() => {}}>Søg nu</button>
            </div>
        </div>
    );
};

export default FilterComponent;
