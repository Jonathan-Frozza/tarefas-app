"use client";
import { useState, useEffect } from "react";

export function useContadorDeTarefas(tarefas: { id: number; titulo: string }[]) {
  const [contador, setContador] = useState(tarefas.length);

  useEffect(() => {
    setContador(tarefas.length);
  }, [tarefas]);

  return { contador };
}
