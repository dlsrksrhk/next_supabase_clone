"use client";

import { useMutation, useQuery } from "react-query";
import { createTodo, getTodos } from "../actions/todo-actions";
import { useState } from "react";
import { todo } from "node:test";
import { queryClient } from "../config/ReactQueryProvider";

export default function TodosPage() {
  const [todoInput, setTodoInput] = useState("");

  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (!todoInput) throw new Error("Todo cannot be empty");
      return createTodo(todoInput);
    },
    onSuccess: (TODOS) => {
      console.log("Updated Todos:", TODOS);
      // todosQuery.refetch();
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  return (
    <div>
      <h1>TODOS</h1>
      {/* Create Todo */}
      <label htmlFor="todo">Todo</label>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        className="bg-slate-200 rounded-md outline-none p-1 shadow-md mx-2"
      />
      <button onClick={() => createTodoMutation.mutate()}>
        {createTodoMutation.isLoading ? "생성중..." : "저장하기"}
      </button>

      {/* Loading Todo */}
      {todosQuery.isLoading && <p>Loading...</p>}
      {todosQuery.data &&
        todosQuery.data.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
    </div>
  );
}
