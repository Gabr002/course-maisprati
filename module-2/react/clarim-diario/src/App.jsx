import Header from "./components/Header/Header.jsx"
import NewsCard from './components/NewsCard/NewsCard.jsx'
import { noticias } from "./data/noticias.js"
import './App.css'

function App() {

  // A linha 8 é um operador desestruturante que separa o primeiro item do array 'noticias' 
  // e atribui a variável 'manchete', e o restante dos itens do array 'noticias' 
  // é atribuído à variável 'demais'
  const [manchete, ...demais] = noticias;

  return (
    <>
      <Header />
      <main className="container">
        <section className="manchete">
          <NewsCard categoria={manchete.categoria} titulo={manchete.titulo} resumo={manchete.resumo} />
        </section>

        <section className="grade">
          {demais.map(noticia => (
            <NewsCard
              key={noticia.id}
              categoria={noticia.categoria}
              titulo={noticia.titulo}
              resumo={noticia.resumo} />
          ))}
        </section>
      </main>
    </>
  )
}

export default App
