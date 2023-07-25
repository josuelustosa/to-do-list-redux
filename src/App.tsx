import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [countTask, setCountTask] = useState(0);

  return (
    <div className="py-5 my-5 text-center">
      <h1 className="fs-1">Lista de Tarefas ({countTask})</h1>

      <div className="col-lg-10 mx-auto">
        <hr className="pb-2" />
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
            onClick={() => setCountTask((count) => count + 1)}
          >
            + Adicionar
          </button>
        </div>

        {countTask ? (
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
        ) : (
          <div
            className="alert alert-secondary border-2 rounded-3"
            role="alert"
          >
            Adicione uma tarefa acima!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
