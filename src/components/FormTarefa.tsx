import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";

import { adicionarTarefa } from "../redux/features/tarefa.slice";

function FormTarefa() {
  const dispatch = useDispatch<AppDispatch>();
  const tarefas = useSelector((state: RootState) => state.tarefa.tarefas);

  const [inputTarefa, setInputTarefa] = useState({
    descricao: "",
    status: false,
  });

  const handleInputTarefa = (e: any) => {
    setInputTarefa({ ...inputTarefa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // encontra o maior ID atual nas tarefas
    const maxId = tarefas.reduce(
      (max, tarefa) => (tarefa.id > max ? tarefa.id : max),
      0
    );
    const novoId = maxId + 1; // gera o novo ID incrementado
    
    const novaTarefa = { id: novoId, ...inputTarefa };
    dispatch(adicionarTarefa(novaTarefa));
    setInputTarefa({ descricao: "", status: false }); // limpa o input após o submit
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
        <div className="col">
          <input
            type="text"
            name="descricao"
            value={inputTarefa.descricao}
            onChange={handleInputTarefa}
            className="form-control form-control-lg border-2 rounded-3"
            placeholder="Criar uma Todo List com React + Redux Toolkit..."
            aria-label="Item da lista de tarefa"
          />
        </div>
        <button
          type="submit"
          className="btn btn-lg btn-primary border-2 rounded-3"
          disabled={!inputTarefa.descricao.length}
        >
          + Adicionar
        </button>
      </div>
    </form>
  );
}

export default FormTarefa;
