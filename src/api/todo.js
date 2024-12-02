import instance from "./interceptor";

export const getTodoList = async () => {
   const response = await instance.get("/todos");
   return response.data;
}

export const addTodoItem = async (todo) => {
   const response = await instance.post("/todos", todo);
   return response.data;
}

export const deleteTodoItem = async (id) => {
   const response = await instance.delete(`/todos/${id}`);
   return response.data;
}

export const updateTodoItem = async (todo) => {
   const response = await instance.put(`/todos/${todo.id}`, todo);
   return response.data;
}