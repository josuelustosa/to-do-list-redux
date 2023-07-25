import { createSlice } from "@reduxjs/toolkit";

interface Tarefa {
  id: number;
  descricao: string;
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
  },
});

export const { adicionarTarefa } = tarefaSlice.actions;
export default tarefaSlice.reducer;
