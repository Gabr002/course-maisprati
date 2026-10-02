import { useParams, Link } from "react-router-dom"
import { buscarNoticiaPorId } from "../../services/noticias.js"
import { useState, useEffect } from "react"
import './Materia.css'

function Materia() {
    const { id } = useParams()

    const [noticia, setNoticia] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        async function load() {
            try {
                setLoading(true)
                setError(null)
                const data = await buscarNoticiaPorId(id)
                setNoticia(data)
            } catch {
                setError('Não foi possível carregar a notícia')
            } finally {
                setLoading(false)
            }
        }
        load()
    }, [id])


    if (!noticia) {
        return (
            <main className="container">
                <p>Matéria não encontrada - Nem o Homem Aranha Destruiria uma Página tão Rápido!</p>
                <Link to="/">Voltar para à capa</Link>
            </main>
        )
    }

    return (
        <main className='container materia'>
            <Link className="materia__voltar" to='/'> &lt; Voltar para à capa</Link>
            <span className='materia__categoria'>{noticia.categoria}</span>
            <h1>{noticia.titulo}</h1>
            <p className="materia__resumo">{noticia.resumo}</p>
            <div className="materia__texto">
                <p>{noticia.texto}</p>
            </div>
        </main>
    )
}

export default Materia