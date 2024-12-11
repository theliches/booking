/*/import React, { useState, lazy, Suspense, useCallback } from 'react';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Select } from '@mantine/core';

type FilterComponentProps = {
  onFilterChange: (newFilters: { dato: Date | null; tid: string | null; lokaletype: string }) => void;
};

const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
  // State definition with proper types
  const [filters, setFilters] = useState({
    dato: null as Date | null,    // The date can be null
    tid: null as string | null,   // Tid can be string or null
    lokaletype: '' as string,     // Lokaletype is always a string
  });

  // Handle changes for each filter field
  const handleChange = useCallback((field: keyof typeof filters, value: string | Date | null) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Notify parent about the filter change
    onFilterChange({
      dato: value === 'dato' ? value : filters.dato,
      tid: value === 'tid' ? value : filters.tid,
      lokaletype: value === 'lokaletype' ? value : filters.lokaletype,
    });
  }, [filters, onFilterChange]);

  return (
    <>
      <DatePicker
        label="Dato"
        placeholder="Vælg dato"
        value={filters.dato}
        onChange={(value: Date | null) => handleChange('dato', value)}
      />
      <TimeInput
        label="Tid"
        placeholder="Vælg tid"
        value={filters.tid}
        onChange={(value: string | null) => handleChange('tid', value)}
      />
      <Select
        label="Lokale type"
        placeholder="Vælg type"
        data={['Kontor', 'Mødelokale', 'Undervisningslokale']}
        value={filters.lokaletype}
        onChange={(value: string) => handleChange('lokaletype', value)}
      />
    </>
  );
};

export default FilterComponent;/*/