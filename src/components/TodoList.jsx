import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {TodoContext} from "../context/TodoContext";
import {getTodoList} from "../api/todo";
import {INIT} from "../context/todoActions";

const TodoList = () => {

    const {dispatch} = useContext(TodoContext);

    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: INIT, payload: todos});
        })
    }, []);

    return (
        <div>
            <h2>{"Todo List"}</h2>
            <TodoGroup/>
            <TodoGenerator/>
        </div>
    );
}

export default TodoList