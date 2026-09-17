import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "./styles/globals.css"
import "./styles/variables.css"
// "Achando" a div de id - root e entrega o controle dela pro react

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
