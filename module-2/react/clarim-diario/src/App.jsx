import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'
import './App.css'

function App() {

  // A linha 8 é um operador desestruturante que separa o primeiro item do array 'noticias' 
  // e atribui a variável 'manchete', e o restante dos itens do array 'noticias' 
  // é atribuído à variável 'demais'
  // A linha 15 usa o Hook useState para definir o estado inicial do tema como 'light' e a função 'setTema' para atualizar o estado
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem('tema') || 'light'
    if (salvo) return salvo

    const preferenciaEscuro = window.matchMedia('(prefers-color-scheme: dark)').matches
  });

  function alterTheme() {
    setTema(t => (t === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('tema', tema)
  }, [tema]);

  return (
    <>
      <Header tema={tema} alterTheme={alterTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
