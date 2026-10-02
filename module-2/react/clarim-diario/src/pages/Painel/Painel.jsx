import { useAuth } from '../../Context/AuthContext.jsx'

function Painel() {
    const { usuario } = useAuth()

    return (
        <main className='container' style={{ padding: '32px 16px' }}>
            <h1>Seja bem-vindo, {usuario.email}</h1>
            <p>Bem-vindo de volta, {usuario.nome}</p>
            <p>Sua edição exclusiva com o dossie completo contra o aracnideo chega as 6hr</p>
        </main>
    )
}

export default Painel;