'use client';
import { useState } from 'react';

export function Excluir({ onClose, onConfirm, taskId }) {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  function handleConfirmDelete() {
    if (onConfirm) onConfirm(dontShowAgain);
    if (onClose) onClose();
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: 24,
          borderRadius: 12,
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          maxWidth: 400,
          width: "90%",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
            background: "transparent",
            border: "none",
            fontSize: 18,
            cursor: "pointer",
          }}
          aria-label="Fechar"
        >
          ×
        </button>

        <p style={{ fontSize: 18, marginBottom: 16 }}>
          {taskId
            ? <>Tem <span style={{ marginLeft: 4 }}>certeza que deseja excluir essa tarefa?</span></>
            : <>Tem <span style={{ marginLeft: 4 }}>certeza que deseja excluir <b>todas</b> as tarefas concluídas?</span></>
          }
        </p>

        <label style={{ display: "flex", alignItems: "center", fontSize: 14, color: "#777" }}>
          <input
            type="checkbox"
            checked={dontShowAgain}
            onChange={() => setDontShowAgain(!dontShowAgain)}
            style={{ marginRight: 8 }}
          />
          Não mostrar novamente
        </label>

        <p style={{ fontSize: 12, color: "#999", marginTop: 16 }}>
          Esse(s) item(s) será(ão) mantido(s) na lixeira por 30 dias.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: 24,
          }}
        >
          <button
            onClick={onClose}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ccc",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              minWidth: 80,
            }}
          >
            Não
          </button>
          <button
            onClick={handleConfirmDelete}
            style={{
              padding: "8px 16px",
              backgroundColor: "#ddd",
              color: "#000",
              border: "none",
              borderRadius: 6,
              cursor: "pointer",
              minWidth: 80,
            }}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
