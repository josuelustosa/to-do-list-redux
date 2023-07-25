import { useState } from "react";

function FormTarefa() {
  const [inputTarefa, setInputTarefa] = useState({
    id: 0,
    descricao: "",
  });

  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-4">
      <div className="col">
        <input
          type="text"
          className="form-control form-control-lg border-2 rounded-3"
          placeholder="Criar uma Todo List com React + Redux Toolkit..."
          aria-label="First name"
        />
      </div>
      <button
        type="button"
        className="btn btn-lg btn-primary border-2 rounded-3"
      >
        + Adicionar
      </button>
    </div>
  );
}

export default FormTarefa;
