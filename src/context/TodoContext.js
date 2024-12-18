import React, {createContext, useReducer} from 'react';
import {initialState, todoReducer} from "./todoReducer";
import {BrowserRouter as Router, Navigate, NavLink, Route, Routes} from "react-router-dom";
import TodoList from "../components/TodoList";
import NotFound from "../components/NotFound";
import DoneList from "../components/DoneList";
import Help from "../components/Help";
import HardStop from "../components/HardStop";

export const TodoContext = createContext();

export const TodoProvider = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoContext.Provider value={{state, dispatch}}>
            <Router>
                <nav style={{ background: '#f2f2f2', padding: '10px' }}>
                    <NavLink to={"/"} >home</NavLink>
                    {' | '}
                    <NavLink to={"/done-list"}>done-list</NavLink>
                    {' | '}
                    <NavLink to={"/help"}>help</NavLink>
                </nav>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/todo-list"}/>}/>
                    <Route path={"/todo-list"} element={<TodoList/>}></Route>
                    <Route path={"/done-list"} element={<DoneList/>}></Route>
                    <Route path={"/help"} element={<Help/>}></Route>
                    <Route path={"/hard-stop"} element={<HardStop/>}></Route>
                    <Route path={"*"} element={<NotFound/>}></Route>
                </Routes>
            </Router>
        </TodoContext.Provider>
    );
}