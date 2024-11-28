import {useContext} from "react";
import {TodoContext} from "../App";
import "./TodoItem.css";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)

    const handleDoneTodo = () => {
        dispatch({type: 'DONE', payload: todo.id});
    };

    return (
        <div>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleDoneTodo}>{todo.text}</div>
        </div>
    );
}

export default TodoItem;