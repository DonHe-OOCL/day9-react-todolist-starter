import React, { createContext, useReducer } from 'react';
import { initialState, todoReducer } from "./todoReducer";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import TodoList from "../components/TodoList";
import NotFound from "../components/NotFound";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                    <Route path={"/todo-list"} element={<TodoList/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </TodoContext.Provider>
    );
}