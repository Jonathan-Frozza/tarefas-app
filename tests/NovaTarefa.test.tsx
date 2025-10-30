import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

beforeAll(() => {
  window.alert = jest.fn();
});

describe("NovaTarefa", () => {
  it("renderiza input e botão", () => {
    render(<NovaTarefa />);
    expect(screen.getByPlaceholderText("Nova tarefa")).toBeInTheDocument();
    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("limpa o input após submissão", () => {
    render(<NovaTarefa />);
    const input = screen.getByPlaceholderText("Nova tarefa");
    fireEvent.change(input, { target: { value: "Testar tarefa" } });
    fireEvent.click(screen.getByText("Adicionar"));
    expect(input).toHaveValue("");
  });
});
