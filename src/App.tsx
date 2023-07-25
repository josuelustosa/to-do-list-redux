import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import FormTask from "./components/FormTarefa";
import ListaTarefa from "./components/ListaTarefa";

function App() {
  return (
    <div className="py-5 my-5 text-center">
      <h1 className="fs-1">Lista de Tarefas (0)</h1>

      <div className="col-lg-10 mx-auto">
        <hr className="pb-2" />

        <FormTask />
        <ListaTarefa />

        {/* <div className="alert alert-secondary border-2 rounded-3" role="alert">
          Adicione uma tarefa acima!
        </div> */}
      </div>
    </div>
  );
}

export default App;
