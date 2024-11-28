import {useContext} from "react";
import {TodoContext} from "../App";
import "./TodoItem.css";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)

    const handleDoneTodo = () => {
        dispatch({type: 'DONE', payload: todo.id});
    };

    const handleDeleteTodo = () => {
        dispatch({type: 'DELETE', payload: todo.id});
    }

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleDoneTodo}>{todo.text}</div>
            <button onClick={handleDeleteTodo}>X</button>
        </div>
    );
}

export default TodoItem;