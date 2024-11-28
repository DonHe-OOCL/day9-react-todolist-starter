import {useContext} from 'react'
import {TodoContext} from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoGroup = () => {

    const {state} = useContext(TodoContext);

    return (
        <div>
            {state.length === 0 ? <div>Add the things you need to do today...</div> :
                <div>{state.map((item, index) => {
                    return <TodoItem key={item.id + index} todo={item}/>
                })}
                </div>
            }
        </div>
    );
}
export default TodoGroup;