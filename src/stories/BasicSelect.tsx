import {
  Select,
  SelectItem,
  SelectOptions,
  SelectText,
  Textarea,
} from '@/components/primitives';
import React from 'react';

function BasicSelect() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Select
        style={{
          backgroundColor: 'white',
          color: 'black',
          width: 200,
        }}
        defaultValue='High'
        handleChange={(text: string) => console.log('text', text)}
      >
        <SelectText style={{ width: '100%', padding: 8 }} />
        <SelectOptions
          style={{ listStyleType: 'none', width: 200, color: 'white' }}
          itemStyling={{ backgroundColor: 'black', padding: 8 }}
          activeItemStyling={{ backgroundColor: 'gray', padding: 8 }}
        >
          <SelectItem value='high'> High</SelectItem>
          <SelectItem value='low'>Low</SelectItem>
          <SelectItem value='medium'>Medium</SelectItem>
        </SelectOptions>
      </Select>
    </div>
  );
}

export default BasicSelect;
