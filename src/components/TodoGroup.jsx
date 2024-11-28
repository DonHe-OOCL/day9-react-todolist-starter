import {useContext} from 'react'
import {TodoContext} from "../App";
import TodoItem from "./TodoItem";

const TodoGroup = () => {

    const {state} = useContext(TodoContext);

    return (
        <div>
            {state.map((item, index) => {
                return <TodoItem key={item.id + index} todo={item}/>
            })}
        </div>
    );
}
export default TodoGroup;