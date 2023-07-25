import { configureStore } from "@reduxjs/toolkit";

import tarefaReducer from "./features/tarefa.slice";

export const store = configureStore({
  reducer: {
    tarefa: tarefaReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
