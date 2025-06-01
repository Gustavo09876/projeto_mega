'use client';

import { createContext, useContext, useState } from 'react';

const TasksContext = createContext();

export function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  function toggleTaskCompletion(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  // Adiciona uma nova task
  function addTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  // Atualiza o título da task
  function updateTaskTitle(id, newTitle) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, title: newTitle } : task
      )
    );
  }

  // Atualiza a descrição da task
  function updateTaskDescription(id, newDescription) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, description: newDescription } : task
      )
    );
  }

  // Atualiza a task inteira (partial update)
  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  }

  // Seleciona uma task pelo id
  function selectTask(id) {
    setSelectedTaskId(id);
  }

  // Limpa a seleção
  function clearSelectedTask() {
    setSelectedTaskId(null);
  }

  // Remove uma task pelo id
  function removeTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  // Remove todas as tasks completadas
  function deleteCompletedTasks() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.isCompleted));
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        updateTaskTitle,
        updateTaskDescription,
        updateTask,
        removeTask,
        toggleTaskCompletion,
        deleteCompletedTasks,
        selectedTaskId,
        selectTask,
        clearSelectedTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

// Hook para consumir o contexto facilmente
export function useTasks() {
  const context = useContext(TasksContext);
  if (!context) throw new Error('useTasks must be used within TasksProvider');
  return context;
}
