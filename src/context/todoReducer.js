import {ADD, DONE, DELETE, INIT, UPDATE} from "./todoActions"
export const initialState = [];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, {id: action.payload.id, text: action.payload.text, done: action.payload.done}];
    case DONE:
      return state.map((todo) => {
        return todo.id === action.payload.id ? {...todo, done: action.payload.done} : todo;
      })
    case DELETE:
      return state.filter((todo) => {
        return todo.id !== action.payload;
      })
    case INIT:
      return action.payload;
    case UPDATE:
      return state.map((todo) => {
        return todo.id === action.payload.id ? {...todo, text: action.payload.text} : todo;
      })
    default:
      return state;
  }
};