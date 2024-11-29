import React, {createContext, useReducer} from 'react';
import {initialState, todoReducer} from "./todoReducer";
import {BrowserRouter as Router, Link, Navigate, Route, Routes} from "react-router-dom";
import TodoList from "../components/TodoList";
import NotFound from "../components/NotFound";
import DoneList from "../components/DoneList";

export const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <Router>
                <nav>
                    <Link to={"/"}>home</Link>
                    |
                    <Link to={"/done-list"}>done-list</Link>
                </nav>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                    <Route path={"/todo-list"} element={<TodoList/>}></Route>
                    <Route path={"/done-list"} element={<DoneList/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </TodoContext.Provider>
    );
}