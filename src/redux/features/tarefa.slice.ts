import { createSlice } from "@reduxjs/toolkit";

interface Tarefa {
  id: number;
  descricao: string;
  status: boolean;
}

interface TarefaState {
  tarefas: Tarefa[];
}

const initialState: TarefaState = {
  tarefas: [],
};

const tarefaSlice = createSlice({
  name: "tarefaSlice",
  initialState: initialState,
  reducers: {
    adicionarTarefa(state, action) {
      state.tarefas.push(action.payload);
    },
    removerTarefa(state, action) {
      const removerId = action.payload;

      state.tarefas = state.tarefas.filter(
        (tarefa) => tarefa.id && tarefa.status !== removerId
      );
    },
    mudarStatusTarefa(state, action) {
      const tarefaId = action.payload;

      state.tarefas = state.tarefas.map((tarefa) => {
        if (tarefa.id === tarefaId) {
          const statusAtual = { status: !tarefa.status };

          return { ...tarefa, statusAtual };
        } else {
          return tarefa;
        }
      });
    },
  },
});

export const { adicionarTarefa, removerTarefa, mudarStatusTarefa } =
  tarefaSlice.actions;
export default tarefaSlice.reducer;
