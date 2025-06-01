'use client';

import React from 'react';
import { useGroups } from '../GroupsContext';

export function GroupFilterMenu({ activeGroupFilters, toggleGroupFilter }) {
  const { groups } = useGroups();

  const menuStyle = {
    position: 'absolute',
    top: '90px',
    left: '610px',
    backgroundColor: '#fff',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
    borderRadius: 4,
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    zIndex: 100,
    fontSize: '12px',
    color: '#333',
  };

  return (
    <div style={menuStyle}>
      <div style={{ fontWeight: 'bold', color: '#374151' }}>Grupos:</div>
      {groups.map((group) => {
        const isActive = activeGroupFilters.includes(group.text1);
        return (
          <div
            key={group.id}
            onClick={() => toggleGroupFilter(group.text1)}
            style={{
              cursor: 'pointer',
              padding: '2px 0',
              color: isActive ? '#111827' : '#6B7280',
              fontWeight: isActive ? 'bold' : 'normal',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: group.color,
              }}
            />
            {group.text1}
          </div>
        );
      })}
    </div>
  );
}
