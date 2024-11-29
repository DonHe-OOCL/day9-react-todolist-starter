import axios from "axios";

const instance = axios.create({
   baseURL: "https://67496974868020296630e5be.mockapi.io/todo"
});

export const getTodoList = async () => {
   const response = await instance.get("/todos");
   return response.data;
}

export const addTodoItem = async() => {
   const response = await instance.post("/todos");
}