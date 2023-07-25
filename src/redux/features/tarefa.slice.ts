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
    removerTarefa(state, action) {
      const removerId = action.payload;
      
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== removerId);
    },
  },
});

export const { adicionarTarefa, removerTarefa } = tarefaSlice.actions;
export default tarefaSlice.reducer;
