import {useState, useContext} from 'react'
import "./TodoGenerator.css";
import {ADD} from "../context/todoActions";
import {SPACE} from "../context/common";
import {TodoContext} from "../context/TodoContext";
import {addTodoItem} from "../api/todo";
import { Button } from 'antd';


const TodoGenerator = () => {

    const [text, setText] = useState();

    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text && text.trim()) {
            addTodoItem({ text: text, done: false}).then((todo) => dispatch({type: ADD, payload: todo}));
        }
        setText(SPACE);
    }

    return (
        <div className={"todo-generator"}>
            <input value={text} onChange={handleChange}/>
            <Button type="primary" onClick={handleAdd}>add</Button>
        </div>
    );

}

export default TodoGenerator;