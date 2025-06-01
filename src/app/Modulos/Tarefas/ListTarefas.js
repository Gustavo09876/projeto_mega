"use client";

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TaskCard = ({ task, onToggle, onDeleteClick}) => {
const [menuOpen, setMenuOpen] = useState(false);
const menuRef = useRef(null);
const router = useRouter();

const handleEditClick = () => {
  router.push(`/NewTask/editTask?id=${task.id}`);
};

const updateTask = (updatedTask) => {
  setTasks(prev =>
    prev.map(t => t.id === updatedTask.id ? updatedTask : t)
  );
};

useEffect(() => {
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  document.addEventListener('mousedown', handleClickOutside);
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, []);

  return (
    <div
      className={`flex items-center justify-between p-2 rounded-full shadow-sm relative ${
        task.isCompleted ? "bg-gray-200 text-gray-500" : "bg-white"
      }`}
      style={{ width: "750px" }}
    >
      {/* Parte esquerda: checkbox e título */}
      <div className="flex items-center gap-8 pl-4" style={{ width: "422px" }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={onToggle}
          className="w-4 h-4"
        />
        <span>{task.title}</span>
      </div>

      {/* Parte direita: status, prioridade, data, menu */}
      <div className="flex items-center gap-4 pr-4">
        <span
          className="text-xs font-medium text-center px-2 py-1 rounded"
          style={{
            width: "90px",
            backgroundColor: task.isCompleted ? "#9CA3AF" : "#BBF7D0",
            color: task.isCompleted ? "#FFFFFF" : "#166534",
          }}
        >
          {task.isCompleted ? "COMPLETED" : "Incompleto"}
        </span>

        <div className="flex items-center gap-1" style={{ width: "90px" }}>
          <span
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor:
                task.priority === "Alta"
                  ? "#EF4444"
                  : task.priority === "Média"
                  ? "#FCD34D"
                  : "#4ADE80",
            }}
          ></span>
          <span
            className={`text-xs font-medium ${
              task.priority === "Alta"
                ? "text-red-500"
                : task.priority === "Média"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {task.priority.toUpperCase()}
          </span>
        </div>

        <span className="text-xs text-gray-600">{task.dueDate}</span>

        {/* Menu */}
        <div className="relative">
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
            <circle cx="5" cy="12" r="1" />
          </svg>

          {menuOpen && (
          <div ref={menuRef} className="absolute right-0 mt-2 w-32 bg-gray-100 rounded shadow-md text-sm z-10">
            <button
              onClick={() => {
                handleEditClick();
                setMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Editar
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">Mover &gt;</button>
            <button
              onClick={() => {
                onDeleteClick();
                setMenuOpen(false); // Fecha o menu após excluir
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600"
            >
              Excluir
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

const TaskCardA = ({ task, onToggle }) => {
  return (
    <div
      className={`flex items-center justify-between p-2 rounded-full shadow-sm ${
        task.isCompleted ? "bg-gray-200 text-gray-500" : "bg-white"
      }`}
      style={{ width: "400px" }}
    >
      <div className="flex items-center gap-4 pl-2">
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={onToggle}
          className="w-4 h-4"
        />
        <span className="truncate" style={{ width: "200px" }}>
          {task.title}
        </span>
      </div>

      <div className="flex items-center gap-2 pr-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{
            backgroundColor:
              task.priority === "Alta"
                ? "#EF4444"
                : task.priority === "Média"
                ? "#FCD34D"
                : "#4ADE80",
          }}
        ></span>
        <span
          className={`text-xs font-medium ${
            task.priority === "Alta"
              ? "text-red-500"
              : task.priority === "Média"
              ? "text-yellow-500"
              : "text-green-500"
          }`}
        >
          {task.dueDate}
        </span>
      </div>
    </div>
  );
};

export { TaskCard, TaskCardA };
