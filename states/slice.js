import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-native-uuid";

const slice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const todo = {
        id: uuid.v4(),
        todo: action.payload,
        complete: false,
        date: new Date().toDateString(),
      };
      state.push(todo);
    },

    removeTodo(state, action) {
      const id = action.payload;
      const indexOf = state.indexOf((e) => e.id == id);
      state.splice(indexOf, 1);
    },

    updateTodo(state, action) {
      const { id, complete, todo } = action.payload;
      const item = state.find((e) => e.id === id);
      if (item) {
        item.complete = complete;
        item.todo = todo;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = slice.actions;
export default slice.reducer;
