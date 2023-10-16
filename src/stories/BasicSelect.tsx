import {
  Icon,
  Select,
  SelectItem,
  SelectOptions,
  SelectText,
  Textarea,
} from '@/components/primitives';
import { FlagIcon } from 'lucide-react';
import React from 'react';

function BasicSelect() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Select
        style={{
          backgroundColor: 'white',
          color: 'black',
        }}
        handleChange={(text: string) => console.log('text', text)}
      >
        <SelectText>
          <Icon as={FlagIcon} size={18} />
        </SelectText>
        <SelectOptions
          offset={10}
          style={{ listStyleType: 'none', width: 190 }}
        >
          <SelectItem
            value='high'
            selectedStyle={{
              color: 'var(--color-primary-3)',
              backgroundColor: '#ff716233',
            }}
          >
            <Icon
              as={FlagIcon}
              size={18}
              style={{
                color: 'var(--color-primary-3)',
              }}
            />
            <div>High</div>
          </SelectItem>
          <SelectItem
            value='low'
            selectedStyle={{
              color: 'var(--color-secondary-3)',
              backgroundColor: '#ffd16633',
            }}
          >
            <Icon
              as={FlagIcon}
              size={18}
              style={{ color: 'var(--color-secondary-3)' }}
            />
            <div>Low</div>
          </SelectItem>
          <SelectItem
            value='medium'
            selectedStyle={{
              color: 'var(--color-primary-6)',
              backgroundColor: '#625df533',
            }}
          >
            <Icon
              as={FlagIcon}
              size={18}
              style={{ color: 'var(--color-primary-6)' }}
            />
            <div>Medium</div>
          </SelectItem>
        </SelectOptions>
      </Select>
    </div>
  );
}

export default BasicSelect;
