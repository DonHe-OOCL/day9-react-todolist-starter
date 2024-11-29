import {useContext, useState} from 'react'
import {TodoContext} from "../context/TodoContext";
import TodoItem from "./TodoItem";
import Pagination from "../utils/Pagination";

const TodoGroup = () => {

    const {state} = useContext(TodoContext);

    const [todosPerPage, setTodosPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = state.slice(indexOfFirstTodo, indexOfLastTodo);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {state.length === 0 ? <div>Add the things you need to do today...</div> :
                <div>{currentTodos.map((item, index) => {
                    return <TodoItem key={item.id + index} todo={item}/>
                })}
                    <Pagination
                        totalItems={state.length}
                        itemsPerPage={todosPerPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            }
        </div>
    );
}
export default TodoGroup;