import { useState } from "react";

interface Todo {
    id: number;
    task: string;
    completed: boolean;
}

const TodoList = () => {

    const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div>
        <h1>Todo List</h1>
        <ul>
            {todos.map(todo => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    {todo.task}
                </li>
            ))}
        </ul>
        <button onClick={() => {
            const newTodo: Todo = {
                id: todos.length + 1,
                task: `New Task ${todos.length + 1}`,
                completed: false
            };
            setTodos([...todos, newTodo]);
        }}>Add Todo</button>

      
    </div>
  )
}

export default TodoList
