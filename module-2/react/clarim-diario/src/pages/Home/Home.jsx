import NewsCard from "../../components/NewsCard/NewsCard"
import { buscarTodasAsNoticias } from "../../services/noticias"
import { useState, useEffect } from "react"
import './Home.css'

function Home() {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                setError('');
                const data = await buscarTodasAsNoticias()
                setNoticias(data)
            } catch {
                setError('Não foi possível carregar as notícias')
            } finally {
                setLoading(false);
            }
        }
        load();
    }, []);

    if (loading) return <p className="aviso-tela">Carregando notícias...</p>
    if (error) return <p className="aviso-tela">{error}</p>
    if (noticias.length === 0) return <p className="aviso-tela">Nenhuma notícia foi encontrada.</p>

    const [manchete, ...demais] = noticias;

    return (
        <main className="container">
            <section className="manchete">
                <NewsCard
                    id={manchete.id}
                    categoria={manchete.categoria}
                    titulo={manchete.titulo}
                    resumo={manchete.resumo}
                />
            </section>

            <section className="grade">
                {demais.map(noticia => (
                    <NewsCard
                        key={noticia.id}
                        id={noticia.id}
                        categoria={noticia.categoria}
                        titulo={noticia.titulo}
                        resumo={noticia.resumo} />
                ))}
            </section>
        </main>
    )
}

export default Home