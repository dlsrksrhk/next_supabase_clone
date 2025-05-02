"use client";

import { deleteTodo, TodoRow, updateTodo } from "actions/todo-actions";
import {
  Checkbox,
  IconButton,
  Spinner,
} from "node_modules/@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { queryClient } from "config/ReactQueryClientProvider";

export default function Todo({ todo }: { todo: TodoRow }) {
  const [isEditing, setIsEditing] = useState(false);
  const [completed, setCompleted] = useState(todo.completed);
  const [title, setTitle] = useState(todo.title);

  const updateTodoMutation = useMutation({
    mutationFn: () =>
      updateTodo({
        ...todo,
        title,
        completed,
        updated_at: new Date().toISOString(),
      }),
    onSuccess: () => {
      setIsEditing(false);
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  const toggleEditing = () => {
    setIsEditing(!isEditing);

    if (isEditing) {
      updateTodoMutation.mutate();
    }
  };

  const deleteTodoMutation = useMutation({
    mutationFn: () => deleteTodo(todo.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      });
    },
  });

  return (
    <div className="flex items-center w-full gap-2">
      <Checkbox
        checked={completed}
        onChange={(e) => {
          setCompleted(e.target.checked);
          updateTodoMutation.mutate();
        }}
      />
      {isEditing ? (
        <input
          className="flex-1 border-b-black border-b outline-none pb-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      ) : (
        <p className={`flex-1 ${completed ? "line-through" : ""}`}>{title}</p>
      )}

      <IconButton onClick={toggleEditing}>
        {updateTodoMutation.isPending ? (
          <Spinner />
        ) : (
          <i className={isEditing ? "fas fa-check" : "fas fa-pen"} />
        )}
      </IconButton>
      <IconButton onClick={() => deleteTodoMutation.mutate()}>
        {deleteTodoMutation.isPending ? (
          <Spinner />
        ) : (
          <i className="fas fa-trash" />
        )}
      </IconButton>
    </div>
  );
}
