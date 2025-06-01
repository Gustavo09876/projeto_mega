'use client';

import { useState } from 'react';
import { useGroups } from '../../GroupsContext'; 

export default function GroupSelector({ selectedGroup, onChangeSelectedGroup }) {
  const { groups } = useGroups();
  const [open, setOpen] = useState(false);

  const handleSelectGroup = (group) => {
    onChangeSelectedGroup(group);
    setOpen(false);
  };

  const [grupoSelecionado, setGrupoSelecionado] = useState(null);

  const buttonStyle = {
    height: '60px',
    width: '220px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '14px',
    border: selectedGroup
      ? `2px solid ${selectedGroup.color}`
      : '1px solid #ccc',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
    transition: 'all 0.2s',
    cursor: 'pointer',
  };

  const dropdownStyle = {
    position: 'absolute',
    marginTop: '8px',
    width: '192px',
    backgroundColor: 'white',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    zIndex: 10,
    maxHeight: '150px',
    overflowY: 'auto',
  };

  const itemStyle = {
    padding: '8px 16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const iconStyle = {
    fontSize: '12px',
    color: '#666',
    marginLeft: 'auto',
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button style={buttonStyle} onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-briefcase-icon lucide-briefcase"
        >
          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
          <rect width="20" height="14" x="2" y="6" rx="2" />
        </svg>
        <span>{selectedGroup ? selectedGroup.text1 : 'Todos grupos'}</span>
        <span style={iconStyle}>▼</span>
      </button>

      {open && (
        <div style={dropdownStyle}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            <li
              onClick={() => {
                handleSelectGroup(null);
                setOpen(false);
              }}
              style={{ ...itemStyle, color: '#888' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
            >
              Todos grupos
            </li>
            {groups.map((group) => (
              <li
                key={group.id}
                onClick={() => {
                  handleSelectGroup(group)
                  setOpen(false);
                }}
                style={itemStyle}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f5f5')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'white')}
              >
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: group.color,
                  }}
                />
                <span>{group.text1}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
