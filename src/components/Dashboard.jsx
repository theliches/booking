import React, { useState, useEffect } from 'react';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Select, Button, Card, Text, Grid, Space, Title } from '@mantine/core';
import { FaUser, FaRegCalendarAlt, FaChalkboard } from 'react-icons/fa';  // You can use Mantine's icons too
import { useQuery } from '@tanstack/react-query';
import { supabase } from './supabase';  // Assuming you've initialized supabase

// Filters component
const Filters = ({ filters, setFilters }) => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <Title order={3}>Find Lokale</Title>
      <DatePicker
        label="Dato"
        placeholder="Vælg dato"
        value={filters.dato}
        onChange={(value) => setFilters((prev) => ({ ...prev, dato: value }))}
      />
      <TimeInput
        label="Tid"
        placeholder="Vælg tid"
        value={filters.tid}
        onChange={(value) => setFilters((prev) => ({ ...prev, tid: value }))}
      />
      <Select
        label="Lokale type"
        placeholder="Vælg type"
        data={['Kontor', 'Mødelokale', 'Undervisningslokale']}
        value={filters.lokaletype}
        onChange={(value) => setFilters((prev) => ({ ...prev, lokaletype: value }))}
      />
    </div>
  );
};

// Room listing component
const RoomList = ({ filters, rooms, bookRoom }) => {
  return (
    <Grid>
      {rooms.map((room) => (
        <Grid.Col span={4} key={room.id}>
          <Card shadow="sm" padding="lg" radius="md">
            <Text weight={500}>{room.name}</Text>
            <Space h="md" />
            <Text><FaRegCalendarAlt /> {room.date}</Text>
            <Text><FaUser /> {room.persons} personer</Text>
            <Text><FaChalkboard /> {room.board ? "Med tavle" : "Uden tavle"}</Text>
            <Button fullWidth onClick={() => bookRoom(room.id)}>Book Lokale</Button>
          </Card>
        </Grid.Col>
      ))}
    </Grid>
  );
};

// Main Dashboard component
const Dashboard = () => {
  const [filters, setFilters] = useState({
    dato: null,
    tid: null,
    lokaletype: '',
  });

  // Fetch rooms from Supabase (you should adjust the query based on your database
