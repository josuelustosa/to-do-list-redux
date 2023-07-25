import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import FormTask from "./components/FormTarefa";
import ListaTarefa from "./components/ListaTarefa";

function App() {
  const qntTarefa = useSelector((state: RootState) => state.tarefa.tarefas);

  return (
    <div className="my-5 text-center">
      <h1 className="fs-1">Lista de Tarefas ({qntTarefa.length})</h1>

      <div className="col-lg-10 mx-auto">
        <hr className="pb-2" />
        <FormTask />
        <ListaTarefa />
        {!qntTarefa.length && (
          <div className="text-secondary">
            Você ainda não possui tarefa. Adicione uma acima!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
