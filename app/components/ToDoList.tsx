'use client';
import { trpc } from "../utilities/client";

export default function ToDoList() {
  const getTodos = trpc.getTodos.useQuery();
  return (
    <div>
      <div>{JSON.stringify(getTodos.data)}</div>
    </div>
    );
}
