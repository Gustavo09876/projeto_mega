"use client";

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useTasks } from '../../TasksContext';
import GroupSelector from '../../Modulos/Grupos/ListGroups';

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

export default function EditarTarefa() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { tasks, updateTask } = useTasks();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [taskId, setTaskId] = useState<string | null>(null);
  
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) setTaskId(id);
  }, [searchParams]);
  
  
  const task = tasks.find((t: Task) => t.id === taskId);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState('');

  const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

  useEffect(() => {
  if (task) {
    setTitulo(task.title || '');
    setDescricao(task.description || '');
    setPrioridade(capitalize(task.priority));
    setStatus(task.isCompleted ? 'Completo' : 'Incompleto');
    setData(task.dueDate || '');
    setSelectedGroup(task.group || null);  
  }
}, [task]);

 const handleSalvar = () => {
  if (!descricao || !prioridade || !status || !data) {
    alert("Por favor, preencha todos os campos.");
    return;
  }
    
  console.log("Grupo selecionado:", selectedGroup);


    const tarefaAtualizada = {
    ...task,
    title: titulo,
    description: descricao,
    isCompleted: status === 'Completo',
    priority: prioridade,
    dueDate: data,
    group: selectedGroup,
     
  };

  updateTask(tarefaAtualizada);
  router.push('/Dashboard/Home');
  };

  if (!task) return <p>Carregando tarefa...</p>;

  return (
  <div
    style={{
      backgroundColor: 'white',
      width: '100%',
      height: '100vh',
      alignItems: 'stretch',
      display: 'flex',
    }}
  >
    {/* Lado esquerdo: Nova tarefa */}
    <div
      style={{
        padding: '1.5rem',
        width: '33.333%',
        height: '100%',
        borderRight: '1px solid #e5e7eb',
        backgroundColor: '#EDEDED',
        alignSelf: 'flex-end',
      }}
    >
      <input
        type="text"
        placeholder="Título da tarefa"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '32px',
          fontWeight: '500',
          marginBottom: '1rem',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          width: '100%',
        }}
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        required
      />
      <label style={{ display: 'block', color: '#374151', marginBottom: '0.25rem' }}>
        Descrição
      </label>
      <textarea
        style={{
          width: '100%',
          backgroundColor: '#EDEDED',
          backgroundImage:
            'repeating-linear-gradient(to bottom, #EDEDED, #EDEDED 28px, #d1d5db 28px, #d1d5db 29px)',
          border: 'none',
          borderRadius: '0px',
          padding: '8px 12px',
          paddingTop: '9px',
          marginBottom: '1rem',
          resize: 'none',
          fontSize: '16px',
          lineHeight: '28px',
          outline: 'none',
          fontFamily: 'sans-serif',
        }}
        rows={6}
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      ></textarea>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <label style={{ color: '#111827', fontWeight: '500' }}>Prioridade</label>
        {['Baixa', 'Média', 'Alta'].map((p) => (
          <button
            key={p}
            onClick={() => setPrioridade(p)}
            style={{
              minWidth: '50px',
              height: '25px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '5px',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '500',
              backgroundColor:
                prioridade === p
                  ? p === 'Baixa'
                    ? 'green'
                    : p === 'Média'
                    ? 'orange'
                    : 'red'
                  : '#d1d5db',
              border: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
          >
            {p}
          </button>
        ))}
      </div>

      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '0.5rem',
          paddingTop: '10px',
        }}
      >
        <label style={{ color: '#111827', fontWeight: '500' }}>Status</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['Completo', 'Incompleto'].map((s) => (
            <button
              key={s}
              onClick={() => setStatus(s)}
              style={{
                width: '120px',
                height: '30px',
                padding: '0.25rem 0.5rem',
                borderRadius: '0.25rem',
                backgroundColor:
                  status === s ? (s === 'Completo' ? '#6b7280' : '#10b981') : '#e5e7eb',
                color: status === s ? 'white' : 'black',
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <input
          type="date"
          style={{
            border: '1px solid black',
            borderRadius: '5px',
            padding: '0.5rem',
            width: '220px',
            height: '50px',
          }}
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      {/* Grupos */}
      <div>
        <GroupSelector
        selectedGroup={selectedGroup}
        onChangeSelectedGroup={setSelectedGroup}
      />
      </div>

      {/* Botões */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          alignContent: 'end',
          gap: '10px',
          width: '100%',
          flexDirection: 'row-reverse',
          paddingTop: '130px',
        }}
      >
        <button
          onClick={() => router.back()}
          style={{
            width: '117px',
            height: '37px',
            borderRadius: '5px',
            border: '1px solid #d1d5db',
            color: '#939393',
            backgroundColor: '#D9D9D9',
            cursor: 'pointer',
          }}
        >
          Cancelar
        </button>
        <button
          onClick={handleSalvar}
          style={{
            width: '138px',
            height: '42px',
            backgroundColor: '#91D5E7',
            color: 'white',
            padding: '0.5rem 0',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
        >
          Salvar
        </button>
      </div>
    </div>

    {/* Lado direito: Tarefas */}
    <div
      style={{
        width: '66.666%',
        position: 'relative',
        padding: '1.5rem',
      }}
    >
      <h1
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '32px',
          fontWeight: '500',
          marginBottom: '1rem',
          border: 'none',
          outline: 'none',
          backgroundColor: 'transparent',
          width: '100%',
        }}
      >
        Tarefas
      </h1>
      <textarea
        style={{
          width: '100%',
          backgroundColor: '#EDEDED',
          backgroundImage:
            'repeating-linear-gradient(to bottom, white, white 28px, #d1d5db 28px, #d1d5db 29px)',
          border: 'none',
          borderRadius: '0px',
          padding: '8px 12px',
          paddingTop: '9px',
          marginBottom: '1rem',
          resize: 'none',
          fontSize: '16px',
          lineHeight: '28px',
          outline: 'none',
          fontFamily: 'sans-serif',
        }}
        rows={6}
        value={''} // Aqui você pode passar o estado ou prop que armazena as tarefas, ex: tarefas
        onChange={() => {}} // Aqui também a função para atualizar as tarefas, se necessário
      ></textarea>
    </div>
  </div>
);
}
