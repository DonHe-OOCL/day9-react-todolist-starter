import {useState, useContext} from 'react'
import "./TodoGenerator.css";
import {ADD} from "../context/todoActions";
import {SPACE} from "../context/common";
import {TodoContext} from "../context/TodoContext";
import {addTodoItem} from "../api/todo";


const TodoGenerator = () => {

    const [text, setText] = useState();

    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text ||text.trim()) {
            addTodoItem({id: Date.now(), text: text, done: false}).then((todo) => dispatch({type: ADD, payload: todo}));
        }
        setText(SPACE);
    }

    return (
        <div className={"todo-generator"}>
            <input value={text} onChange={handleChange}/>
            <button onClick={handleAdd}>add</button>
        </div>
    );

}

export default TodoGenerator;