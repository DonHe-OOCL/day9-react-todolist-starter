import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import "./TodoItem.css";
import {DONE, DELETE} from "../context/todoActions";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)

    const handleDoneTodo = () => {
        console.log(todo.id, "done");
        dispatch({type: DONE, payload: todo.id});
    };

    const handleDeleteTodo = () => {
        dispatch({type: DELETE, payload: todo.id});
    }

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleDoneTodo}>{todo.text}</div>
            <button onClick={handleDeleteTodo}>X</button>
        </div>
    );
}

export default TodoItem;