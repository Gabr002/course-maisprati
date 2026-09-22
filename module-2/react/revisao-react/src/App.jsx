import { useState } from "react"
import Header from "./components/Header"
import CardUsuario from "./components/CardUsuario"

function App() {
  const nomeDoCurso = "React +Prati"
  const [concluidas, setConcluidas] = useState(0)

  return (
    <div className="app">
      <Header />
      <CardUsuario nome="Felipe" curso="BCC" />

      <p>Tarefas concluídas: {concluidas}</p>
      {/* A função do setConcluidas é alterar o valor da variável concluidas, e o () => setConcluidas(concluidas + 1) é uma função que incrementa o valor de concluidas em 1, para que o estado seja atualizado */}
      <button onClick={() => setConcluidas(concluidas + 1)}>Concluir Tarefa</button>
    </div>
  )
}

export default App
