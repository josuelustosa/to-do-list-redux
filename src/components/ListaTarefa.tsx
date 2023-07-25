import { useState } from "react";

function ListaTarefa() {
  const [tarefas, setTarefa] = useState([]);

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex justify-content-center align-items-center border-2 rounded-3 mb-2">
        <div className="col-10 text-start">
          <input
            className="form-check-input me-2"
            type="checkbox"
            value=""
            id="check-box-list"
          />
          <label className="form-check-label" htmlFor="check-box-list">
            Tarefa 1...
          </label>
        </div>
        <div className="col-2 text-end">
          <button type="button" className="btn btn-danger">
            <i className="bi bi-trash3-fill"></i>
          </button>
        </div>
      </li>
    </ul>
  );
}

export default ListaTarefa;
