import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        _id: nanoid(),
        data: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    updatedTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo._id === action.payload._id
          ? { ...todo, data: action.payload.data }
          : todo
      );
    },
    toggleTodo: (state, action) => {
      state.todos = state.todos.map((item) =>
        item._id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
    },
  },
});

export const { addTodo, removeTodo, updatedTodo, toggleTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
