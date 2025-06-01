"use client";
import React, { useMemo, useState } from "react";
import { useTasks } from "../../TasksContext";
import { TaskCard, TaskCardA } from "../../Modulos/Tarefas/ListTarefas";
import Link from "next/link";
import { Excluir } from "../../Modulos/Excluir";
import {GroupFilterMenu} from "../../Modulos/GroupFilterMenu"

interface Group {
  id: string;
  text1: string;
  color: string;
}
interface Task {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  priority?: string;
  dueDate?: string;
  group?: Group;  
}
interface TaskSectionProps {
  title: string;
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  isCompleted?: boolean;
  onDeleteClick?: () => void;
}

export default function Home() {
  const { tasks, removeTask, toggleTaskCompletion, deleteCompletedTasks } = useTasks();
  const [showFilters, setShowFilters] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<string | null>(null);
  const [dontShowAgain, setDontShowAgain] = useState(false);
  const [searchQueryMain, setSearchQueryMain] = useState("");
  const [searchQueryUpcoming, setSearchQueryUpcoming] = useState("");
  const [searchQueryCompleted, setSearchQueryCompleted] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showGroupFilters, setShowGroupFilters] = useState(false);
  const [activeGroupFilters, setActiveGroupFilters] = useState<string[]>([]);
  const availableGroups: string[] = Array.from(
  new Set(
    tasks
      .map((task: Task) => task.group?.text1)
      .filter((text: string | undefined): text is string => typeof text === "string")
  )
);
  const filteredTasks = useMemo(() => {
  return tasks.filter((task: Task) => {
    const matchesSearch = task.title.toLowerCase().includes(searchQueryMain.toLowerCase());
    const matchesGroup = activeGroupFilters.length === 0 || 
    (task.group && activeGroupFilters.includes(task.group.text1));
    const matchesFilters = activeFilters.every(filter => {
      if (filter === "Pri. Alta") return task.priority === "Alta";
      if (filter === "Pri. Media") return task.priority === "Média";
      if (filter === "Pri. Baixa") return task.priority === "Baixa";
      if (filter === "Em Progresso") return task.isCompleted === false;
      if (filter === "Concluídas") return task.isCompleted === true;
      if (filter === "A fazer") return task.isCompleted === false;
      return true;
    });

    return matchesSearch && matchesFilters && matchesGroup;
  });
}, [tasks, searchQueryMain, activeFilters, activeGroupFilters]);

  const uncompletedTasks = useMemo(() => tasks.filter((task: Task) => !task.isCompleted), [tasks]);
  const completedTasks = useMemo(() => tasks.filter((task: Task) => task.isCompleted), [tasks]);

  const filteredUncompletedTasks = useMemo(() => {
    return uncompletedTasks.filter((task: Task) =>
      task.title.toLowerCase().includes(searchQueryUpcoming.toLowerCase())
    );
  }, [uncompletedTasks, searchQueryUpcoming]);

  const filteredCompletedTasks = useMemo(() => {
    return completedTasks.filter((task: Task) =>
      task.title.toLowerCase().includes(searchQueryCompleted.toLowerCase())
    );
  }, [completedTasks, searchQueryCompleted]);


  // Abre modal para excluir tarefa individual
  function openDeleteSingle(taskId: string) {
    setTaskIdToDelete(taskId);
    setShowConfirmDelete(true);
  }

  function toggleGroupFilter(group: string) {
  setActiveGroupFilters((prev) =>
    prev.includes(group) ? prev.filter(g => g !== group) : [...prev, group]
  );
}

  // Abre modal para excluir todas concluídas
  function openDeleteAllCompleted() {
    setTaskIdToDelete(null);
    setShowConfirmDelete(true);
  }
  function toggleFilter(filter: string) {
  setActiveFilters((prev) =>
    prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
  );
}

  // Confirmar exclusão
  function handleConfirmDelete(dontShowAgainChecked: boolean) {
    setDontShowAgain(dontShowAgainChecked);

    if (taskIdToDelete) {
      removeTask(taskIdToDelete);
    } else {
      deleteCompletedTasks();
    }

    setShowConfirmDelete(false);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingLeft: 32,
        paddingTop: 56,
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "row", gap: 100 }}>
        <div>
          <TopBar searchQuery={searchQueryMain} setSearchQuery={setSearchQueryMain} onFilterClick={() => setShowFilters(prev => !prev)}  onGroupFilterClick={() => setShowGroupFilters(prev => !prev)}   />
          
          {showGroupFilters && (
            <GroupFilterMenu 
              activeGroupFilters={activeGroupFilters} 
              toggleGroupFilter={toggleGroupFilter} 
            />
          )}
          {showFilters && <FilterMenu activeFilters={activeFilters} toggleFilter={toggleFilter} />}
          <div>
            {activeFilters.length > 0 ? (
              <span style={{ fontSize: 12, color: "#6b7280", marginTop: 4, paddingLeft: 4 }}>
                {activeFilters.map(filter => `#${filter}`).join(" ")}
              </span>
            ) : (
              <span style={{ fontSize: 12, color: "#6b7280", marginTop: 4, paddingLeft: 4 }}>#Sem filtros</span>
            )}
          </div>
          
          <div
            style={{
              borderBottom: "1px solid #d1d5db",
              width: "750px",
              height: 20,
              display: "flex",
              flexDirection: "row",
              color: "#9ca3af",
              paddingLeft: 8,
            }}
          >
            <div style={{ width: 422 }}>Check</div>
            <div style={{ width: 90, display: "flex", justifyContent: "center" }}>Status</div>
            <div style={{ width: 90, display: "flex", justifyContent: "center" }}>Prioridade</div>
            <div style={{ width: 90, display: "flex", justifyContent: "center" }}>Data</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingTop: 8,
              height: "80vh",
              maxHeight: "80vh",
              overflowY: "auto",
              paddingBottom: 8,
            }}
          >
            {filteredTasks
              .slice() // Cria uma cópia para não mutar o array original
              .sort((a: Task, b: Task) => {
                const dateA = new Date(a.dueDate ?? '9999-12-31').getTime();
                const dateB = new Date(b.dueDate ?? '9999-12-31').getTime();
                return dateA - dateB;
              })
              .map((task: Task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onToggle={() => toggleTaskCompletion(task.id)}
                  onDeleteClick={() => openDeleteSingle(task.id)}
                />
            ))}
          </div>
        </div>

        <div style={{ margin: "0 auto", display: "flex", flexDirection: "column" }}>
          <TaskSection
            title="PRÓXIMOS DIAS"
            tasks={filteredUncompletedTasks}
            toggleTaskCompletion={toggleTaskCompletion}
            searchQuery={searchQueryUpcoming}
            setSearchQuery={setSearchQueryUpcoming}
          />
          <TaskSection
            title="CONCLUÍDAS"
            tasks={filteredCompletedTasks}    // <-- aqui deve ser a lista filtrada
            toggleTaskCompletion={toggleTaskCompletion}
            isCompleted
            onDeleteClick={openDeleteAllCompleted}
            searchQuery={searchQueryCompleted}
            setSearchQuery={setSearchQueryCompleted}
          />
        </div>
      </div>

      {showConfirmDelete && (
        <Excluir
          onClose={() => setShowConfirmDelete(false)}
          onConfirm={handleConfirmDelete}
          taskId={taskIdToDelete}
        />
      )}
    </div>
  );
}

function TopBar({ searchQuery, setSearchQuery, onFilterClick, onGroupFilterClick  }: { searchQuery: string; setSearchQuery: (value: string) => void; onFilterClick: () => void; onGroupFilterClick: () => void;}) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
      <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: "50%",
            left: 16,
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#494949"
          strokeWidth="2"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
       <input
          type="text"
          placeholder="Digite aqui..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: 488,
            height: 40,
            paddingLeft: 44,
            paddingRight: 16,
            border: "1px solid rgba(0,0,0,0.4)",
            borderRadius: 6,
            outline: "none",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <div onClick={onFilterClick} style={{ cursor: "pointer" }}>
          <FilterIcon />
        </div>
        <div onClick={onGroupFilterClick} style={{ cursor: "pointer" }}>
          <GroupIcon />
        </div>
        <Link href="/NewTask">
          <div
            style={{
              width: 120,
              height: 35,
              backgroundColor: "#91d5e7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              borderRadius: 12,
              cursor: "pointer",
              gap: 4,
            }}
          >
            NOVO
            <PlusIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

interface TaskSectionProps {
  title: string;
  tasks: Task[];
  toggleTaskCompletion: (id: string) => void;
  isCompleted?: boolean;
  onDeleteClick?: () => void;
}

function FilterMenu({ activeFilters, toggleFilter }: { activeFilters: string[], toggleFilter: (filter: string) => void }) {

  const menuStyle = {
    position: "absolute" as const,
    top: "90px",   
    left: "625px", 
    marginLeft: "8px", 
    backgroundColor: "#fff",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.1)",
    borderRadius: 4,
    padding: "8px 12px",
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    zIndex: 100,
    fontSize: "12px",
    color: "#333",
  };

  const itemStyle = {
    cursor: "pointer",
    padding: "2px 0",
    color: "#6B7280",
  };

  const titleStyle = {
    ...itemStyle,
    fontWeight: "bold",
    color: "#374151",
  };

  const filters = ["Pri. Alta", "Pri. Media", "Pri. Baixa", "Em Progresso", "Concluídas"];

  return (
    <div style={menuStyle}>
      <div style={{ fontWeight: "bold", color: "#374151" }}>Filtros:</div>
      {filters.map(filter => (
        <div
          key={filter}
          style={{
            cursor: "pointer",
            padding: "2px 0",
            color: activeFilters.includes(filter) ? "#111827" : "#6B7280",
            fontWeight: activeFilters.includes(filter) ? "bold" : "normal"
          }}
          onClick={() => toggleFilter(filter)}
        >
          {filter}
        </div>
      ))}   
  </div>
  )
}


function TaskSection({
  title,
  tasks,
  toggleTaskCompletion,
  searchQuery,
  setSearchQuery,
  isCompleted = false,
  onDeleteClick,
}: TaskSectionProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8,
        paddingTop: 8,
        width: 500,
        height: "40vh",
        maxHeight: "40vh",
        overflowY: "auto",
        paddingBottom: 8,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #d1d5db",
          borderRadius: 6,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 8,
          paddingBottom: 8,
          backgroundColor: "white",
          width: "100%",
          maxWidth: 448,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: 8 }}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#494949"
          strokeWidth="2"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <input
          type="text"
          placeholder={title}
          value={searchQuery}               // <--- aqui
          onChange={(e) => setSearchQuery(e.target.value)}  // <--- e aqui
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            outline: "none",
            color: "#374151",
            textAlign: "center",
            border: "none",
          }}
        />
        {isCompleted && (
          <button
            onClick={onDeleteClick}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              marginLeft: 8,
            }}
            aria-label="Excluir tarefas concluídas"
          >
            <TrashIcon />
          </button>
        )}
      </div>
      {tasks.map((task: Task) => (
        <TaskCardA key={task.id} task={task} onToggle={() => toggleTaskCompletion(task.id)} />
      ))}
    </div>
  );
}

function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#414141"
      strokeWidth="2"
    >
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  );
}

function GroupIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#414141"
      strokeWidth="2"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#414141"
      strokeWidth="2"
    >
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6" />
      <path d="M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
    
  );
  
}

