import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Home from './pages/Home/Home'
import Cadastro from "./pages/Cadastro/Cadastro"
import Materia from "./pages/Materia/Materia"
import './App.css'

function App() {

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
        <Route path="/materia/:id" element={<Materia />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  )
}

export default App
