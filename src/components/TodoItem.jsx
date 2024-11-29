import {useContext} from "react";
import {TodoContext} from "../context/TodoContext";
import "./TodoItem.css";
import {DONE, DELETE} from "../context/todoActions";
import {deleteTodoItem} from "../api/todo";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)

    const handleDoneTodo = () => {
        dispatch({type: DONE, payload: todo.id});
    };

    const handleDeleteTodo = () => {
        deleteTodoItem(todo.id).then((item) =>
            dispatch({type: DELETE, payload: item.id})
        );
    }

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleDoneTodo}>{todo.text}</div>
            <button onClick={handleDeleteTodo}>X</button>
        </div>
    );
}

export default TodoItem;