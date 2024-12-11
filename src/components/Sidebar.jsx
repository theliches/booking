// Sidebar.jsx
import React from 'react';
import { Navbar, Group, ActionIcon, Text } from '@mantine/core';
import { Home, Calendar, Video, FileText, Users, Mail, Auditorium as AuditoriumIcon } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';

const Sidebar = () => {
  return (
    <Navbar width={{ base: 80 }} p="xs" style={{ backgroundColor: '#2C2C2C' }}>
      <Navbar.Section>
        {/* Dashboard */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/dashboard" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <Home size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Dashboard
            </Text>
          </Link>
        </Group>

        {/* Book Locale */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/book-locale" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <Calendar size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Book Locale
            </Text>
          </Link>
        </Group>

        {/* Mine Booking */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/mine-booking" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <Users size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Mine Booking
            </Text>
          </Link>
        </Group>

        {/* Locale Overview */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/locale-overview" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <FileText size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Locale Overview
            </Text>
          </Link>
        </Group>

        {/* Medialab */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/medialab" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <Video size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Medialab
            </Text>
          </Link>
        </Group>

        {/* Makerlab */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/makerlab" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <Mail size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Makerlab
            </Text>
          </Link>
        </Group>

        {/* Auditorium */}
        <Group direction="column" spacing="xs" align="center" style={{ marginBottom: '20px' }}>
          <Link to="/auditorium" style={{ textDecoration: 'none' }}>
            <ActionIcon variant="transparent">
              <AuditoriumIcon size={30} color="white" />
            </ActionIcon>
            <Text size="sm" sx={{ color: 'white', textAlign: 'center' }}>
              Auditorium
            </Text>
          </Link>
        </Group>
      </Navbar.Section>
    </Navbar>
  );
};

export default Sidebar;
