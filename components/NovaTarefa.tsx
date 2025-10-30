"use client";
import { useState } from "react";

interface NovaTarefaProps {
  onAdd?: (titulo: string) => void;
}

export default function NovaTarefa({ onAdd }: NovaTarefaProps) {
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa() {
    if (!tarefa.trim()) {
      alert("Digite uma tarefa!");
      return;
    }

    onAdd?.(tarefa); // ✅ chama a função do Page
    alert("Tarefa adicionada com sucesso!");
    setTarefa("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
        className="border rounded p-2 mr-2"
      />
      <button onClick={adicionarTarefa} className="bg-blue-500 text-white p-2 rounded">
        Adicionar
      </button>
    </div>
  );
}
