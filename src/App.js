import './App.css';
import TodoList from "./components/TodoList";
import {TodoProvider} from "./context/TodoContext";
import React from "react";

function App() {

    return (
        <div className="App">
            <TodoProvider>
                <TodoList/>
            </TodoProvider>
        </div>
    );
}

export default App;
