
"use client";
import { Suspense } from "react";
import NovaTarefa from "../components/NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

const tarefasSimuladas = [
  { id: 1, titulo: "Aprender Next.js 15" },
  { id: 2, titulo: "Estudar testes unitários" },
];

export default function Page() {
  const { contador } = useContadorDeTarefas(tarefasSimuladas);

  return (
    <div>
      <h1>Lista de Tarefas ({contador})</h1>
      <ul>
        {tarefasSimuladas.map((t) => (
          <li key={t.id}>{t.titulo}</li>
        ))}
      </ul>
      <Suspense fallback={<div>Carregando...</div>}>
        <NovaTarefa />
      </Suspense>
    </div>
  );
}
