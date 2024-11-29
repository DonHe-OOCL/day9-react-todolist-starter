import {useContext, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import "./css/TodoItem.css";
import {DONE, DELETE, UPDATE} from "../context/todoActions";
import {deleteTodoItem, updateTodoItem} from "../api/todo";
import {Button, Input, Modal} from "antd";

const TodoItem = ({todo}) => {

    const {dispatch} = useContext(TodoContext)

    const [editText, setEditText] = useState(todo.text);
    const [editModalVisible, setEditModalVisible] = useState(false);

    const handleDoneTodo = () => {
        const item = {id: todo.id, text: todo.text, done: !todo.done};
        updateTodoItem(item).then(() => {
            dispatch({type: DONE, payload: item});
        });
    };

    const handleDeleteTodo = () => {
        deleteTodoItem(todo.id).then((item) =>
            dispatch({type: DELETE, payload: item.id})
        );
    }

    const handleEditSave = () => {
        if (!editText || !editText.trim() || editText === todo.text) {
            return;
        }
        const item = { id: todo.id, text: editText, done: todo.done };
        updateTodoItem(item).then(() => {
            dispatch({ type: UPDATE, payload: item });
            setEditModalVisible(false);
        });
    };

    const handleEditCancel = () => {
        setEditText(todo.text);
        setEditModalVisible(false);
    };

    return (
        <div className={"todo-item"}>
            <div className={`todo-text ${todo.done ? "done" : ""}`} onClick={handleDoneTodo}>{todo.text}</div>
            <Button className={"item-button"} type="primary" onClick={() => setEditModalVisible(true)}>edit</Button>
            <Button className={"item-button"} type="primary" danger onClick={handleDeleteTodo}>X</Button>
            <Modal
                title="Basic Modal"
                open={editModalVisible}
                onOk={handleEditSave}
                onCancel={handleEditCancel}
            >
                <Input value={editText} onChange={(e) => setEditText(e.target.value)} />
            </Modal>
        </div>
    );
}

export default TodoItem;