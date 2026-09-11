import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar React",
      completed: true,
    },
    {
      id: 2,
      text: "Estudar Node",
      completed: false,
    },
    {
      id: 3,
      text: "Estudar HTML",
      completed: true,
    }
  ]);

  const concluirTarefa = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <ul className="todo-list">
        {todos.map((todo) => (
          <div className="todo">
            <div className="conteudo">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => concluirTarefa(todo.id)} />
              <li key={todo.id} className="todo">{todo.text} - Status: {todo.completed ? "Concluída" : "Pendente"}</li>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}

export default App
