"use server";

var TODOS: string[] = ["Todo 1!!!", "Todo 2!!!", "Todo 3!!!"];

export const getTodos = () => {
  return TODOS;
};

export const createTodo = async (data: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay

  TODOS.push(data);
  return TODOS;
};
