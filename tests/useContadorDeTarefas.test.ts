import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

test("retorna a quantidade correta de tarefas", () => {
  const tarefas = [{ id: 1, titulo: "T1" }, { id: 2, titulo: "T2" }];
  const { result } = renderHook(() => useContadorDeTarefas(tarefas));
  expect(result.current.contador).toBe(2);
});
