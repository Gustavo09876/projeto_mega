'use client';

import { title } from 'process';
import { createContext, useContext, useState } from 'react';

const GroupsContext = createContext();

export function GroupsProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const selectedGroup = groups.find((g) => g.id === selectedGroupId) || null;

  function addGroup(newGroup) {
    setGroups((prev) => [...prev, newGroup]);
  }

  function updateGroupName(id, newName) {
    setGroups((prev) =>
      prev.map((group) =>
        group.id === id ? { ...group, text1: newName } : group
      )
    );
  }

  function selectGroup(id) {
    setSelectedGroupId(id);
  }

  function clearSelectedGroup() {
    setSelectedGroupId(null);
  }

  function removeGroup(id) {
    setGroups((prev) => prev.filter((group) => group.id !== id));
  }

  return (
    <GroupsContext.Provider
      value={{
        groups,
        addGroup,
        updateGroupName,
        selectedGroupId,
        selectedGroup,
        selectGroup,
        clearSelectedGroup,
        removeGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
}

export function useGroups() {
  const context = useContext(GroupsContext);
  if (!context) throw new Error('useGroups must be used within GroupsProvider');
  return context;
}
