import React, { useState } from 'react';
import { DatePicker, TimeInput } from '@mantine/dates';
import { Select } from '@mantine/core'; 

type FilterComponentProps = {
    onFilterChange: (newFilters: { dato: Date | null; tid: string | null; lokaletype: string }) => void;
  };
  
  const FilterComponent: React.FC<FilterComponentProps> = ({ onFilterChange }) => {
    const [filters, setFilters] = useState({
        dato: null as Date | null,
        tid: null as string | null,  // Ensure tid can be string or null
        lokaletype: '',
      });
  
    const handleChange = (key: string, value: any) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      onFilterChange(newFilters); // Call the parent function with the new filters
    };
  
    return (
      <>
        <DatePicker
          label="Dato"
          placeholder="Vælg dato"
          value={filters.dato}
          onChange={(value) => handleChange('dato', value)}
        />
        <TimeInput
          label="Tid"
          placeholder="Vælg tid"
          value={filters.tid}
          onChange={(value) => handleChange('tid', value)}
        />
        <Select
          label="Lokale type"
          placeholder="Vælg type"
          data={['Kontor', 'Mødelokale', 'Undervisningslokale']}
          value={filters.lokaletype}
          onChange={(value) => handleChange('lokaletype', value)}
        />
      </>
    );
  };
  
  export default FilterComponent;
  