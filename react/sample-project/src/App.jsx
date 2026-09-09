import { useState } from "react"

export default function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Estudar JavaScript', concluida: false },
    { id: 3, texto: 'Estudar HTML', concluida: false },
  ])

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}> {tarefa.texto} -  Status: {tarefa.concluida ? 'Concluída' : 'Pendente'}</li>
        ))}
      </ul>
    </div>
  )
}