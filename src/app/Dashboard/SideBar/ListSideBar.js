'use client';

import { height, width } from '@fortawesome/free-solid-svg-icons/fa0';
import { useGroups } from '../../GroupsContext';
import { useState, useEffect, useRef } from 'react';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function SidebarLabels({ isExpanded }) {
  const { groups, addGroup, updateGroupName, removeGroup, selectedGroupId, selectGroup, clearSelectedGroup } = useGroups();
  const [editingGroupId, setEditingGroupId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const containerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        clearSelectedGroup();
        setEditingGroupId(null);
        setEditingText('');
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [clearSelectedGroup]);

  useEffect(() => {
    function handleKeyDown(event) {
      if ((event.key === 'Delete' || event.key === 'Backspace') && selectedGroupId) {
        removeGroup(selectedGroupId);
        clearSelectedGroup();
        setEditingGroupId(null);
        setEditingText('');
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedGroupId, removeGroup, clearSelectedGroup]);

  const handleAddGroup = () => {
    const newGroup = {
      id: Date.now().toString(),
      text1: '',
      color: getRandomColor(),
      width: "10000px"
    };
    addGroup(newGroup);
    setEditingGroupId(newGroup.id);
    setEditingText('');
    selectGroup(newGroup.id);
  };

  const handleNameChange = (value) => {
    setEditingText(value);
  };

  const handleSelectGroup = (id) => {
    if (selectedGroupId === id) {
      clearSelectedGroup();
    } else {
      selectGroup(id);
      setEditingGroupId(null);
      setEditingText('');
    }
  };

  const handleDoubleClick = (group) => {
    setEditingGroupId(group.id);
    setEditingText('');
  };

  const handleBlur = (id) => {
    if (editingText.trim() !== '') {
      updateGroupName(id, editingText.trim());
    }
    setEditingGroupId(null);
    setEditingText('');
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') {
      handleBlur(id);
    }
  };

  return (
    <div
      ref={containerRef}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        onClick={handleAddGroup}
        style={{
          cursor: 'pointer',
          paddingTop: isExpanded ? '10px' : '0',
          paddingLeft: isExpanded ? '10px' : '0',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </div>

      {groups.map((group) => {
        const displayText = isExpanded
          ? group.text1 || 'Sem nome'
          : (group.text1 || 'Sem nome').substring(0, 2);

        const isSelected = selectedGroupId === group.id;

        return (
          <div
            key={group.id}
            onClick={() => handleSelectGroup(group.id)}
            onDoubleClick={() => handleDoubleClick(group)}
            style={{
              maxWidth: '100%',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isSelected ? '#89aeb0' : 'transparent',
              padding: '2px 5px',
              borderRadius: isSelected ? '25px' : '0px',
              transition: '0.2s',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: group.color,
                marginRight: '8px',
                borderRadius: '50%',
              }}
            />
            {editingGroupId === group.id ? (
              <input
                type="text"
                placeholder={group.text1 || 'Nome do grupo'}
                value={editingText}
                onChange={(e) => handleNameChange(e.target.value)}
                onBlur={() => handleBlur(group.id)}
                onKeyDown={(e) => handleKeyDown(e, group.id)}
                autoFocus
                style={{
                  flex: 1,
                  padding: '2px 6px',
                  borderRadius: '5px',
                  border: 'none',
                  fontSize: '16px',
                  outline: 'none',
                  maxWidth: isExpanded ? '100px' : '20px',  // largura máxima diferente
                  minWidth: '50px',
                  display: 'block',
                }}
              />
            ) : (
              <span
                style={{
                  color: 'white',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: 1,
                  paddingLeft: '2px',
                  userSelect: 'none',
                }}
              >
                {displayText}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}
