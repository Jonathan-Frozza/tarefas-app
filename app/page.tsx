"use client";
import { Suspense, useState } from "react";
import NovaTarefa from "../components/NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

const tarefasIniciais = [
  { id: 1, titulo: "Aprender Next.js 15" },
  { id: 2, titulo: "Estudar testes unitários" },
];

export default function Page() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);
  const { contador } = useContadorDeTarefas(tarefas);

  function adicionarTarefa(titulo: string) {
    const nova = { id: tarefas.length + 1, titulo };
    setTarefas((prev) => [...prev, nova]);
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2">Lista de Tarefas ({contador})</h1>
      <ul className="list-disc pl-6 mb-4">
        {tarefas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>

      <Suspense fallback={<div>Carregando...</div>}>
        {/* ✅ Passa função de adicionar tarefa como prop */}
        <NovaTarefa onAdd={adicionarTarefa} />
      </Suspense>
    </div>
  );
}
