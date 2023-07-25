import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState } from "../redux/store";
import { AppDispatch } from "../redux/store";

import { removerTarefa } from "../redux/features/tarefa.slice";

function ListaTarefa() {
  const dispatch = useDispatch<AppDispatch>();

  const tarefa = useSelector((state: RootState) => state.tarefa.tarefas);

  const removerTarefaPorId = (id: number) => {
    dispatch(removerTarefa(id));
  };

  const [valorCheckBox, setValorCheckBox] = useState(false);

  const alterarValorCheckBox = (e: any) => {
    setValorCheckBox(e.target.checked);
  };

  return (
    <ul className="list-group">
      {tarefa.map((t) => {
        return (
          <li
            key={t.id}
            className="list-group-item d-flex justify-content-center align-items-center border-2 rounded-3 mb-2"
          >
            <div className="col-10 text-start">
              <input
                className="form-check-input me-3"
                type="checkbox"
                id="check-box-list"
                onChange={alterarValorCheckBox}
              />
              <label
                className="form-check-label"
                htmlFor="check-box-list"
                style={
                  valorCheckBox
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {t.descricao}
              </label>
            </div>
            <div className="col-2 text-end">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removerTarefaPorId(t.id)}
              >
                <i className="bi bi-trash3-fill"></i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ListaTarefa;
