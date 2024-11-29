import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../context/TodoContext";
import {getTodoList} from "../api/todo";
import {INIT} from "../context/todoActions";
import {Spin} from "antd";

const TodoList = () => {

    const {dispatch} = useContext(TodoContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTodoList().then((todos) => {
            dispatch({type: INIT, payload: todos});
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return (
        <div>
        {
            loading ? (<Spin size="large"/>)
                : (
                    <div>
                        <h2>{"Todo List"}</h2>
                        <TodoGroup/>
                        <TodoGenerator/>
                    </div>
                )
        }
        </div>
    );
}

export default TodoList