import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

import { adicionarTarefa } from "../redux/features/tarefa.slice";

function FormTarefa() {
  const dispatch = useDispatch<AppDispatch>();

  const [incrementarIndice, setIncrementarIndice] = useState(0);

  const [inputTarefa, setInputTarefa] = useState({
    descricao: "",
    status: false,
  });

  const handleInputTarefa = (e: any) => {
    setInputTarefa({ ...inputTarefa, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const novaTarefa = { id: incrementarIndice, ...inputTarefa };
    dispatch(adicionarTarefa(novaTarefa));

    setIncrementarIndice(incrementarIndice + 1); // incrementa + 1 no id
    setInputTarefa({ descricao: "", status: false }); // limpa o input após o submit

    console.log("tarefa", novaTarefa);
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
