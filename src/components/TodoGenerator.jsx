import {useState, useContext} from 'react'
import "./TodoGenerator.css";
import {ADD} from "../context/todoActions";
import {SPACE} from "../context/common";
import {TodoContext} from "../context/TodoContext";


const TodoGenerator = () => {

    const [text, setText] = useState();

    const {dispatch} = useContext(TodoContext);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleAdd = () => {
        if (text ||text.trim()) {
            dispatch({type: ADD, payload: text});
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