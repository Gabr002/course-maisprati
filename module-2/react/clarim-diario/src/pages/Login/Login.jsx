import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/AuthContext.jsx'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [erro, setErro] = useState('')

    const { login } = useAuth()

    const navigate = useNavigate()

    function enviar(e) {
        e.preventDefault()
        try {
            login(email, password)
            navigate('/')
        } catch (erro) {
            setErro(erro.message)
        }
    }

    return (
        <main className=''>
            <form action="" className="formulario" onSubmit={enviar}>
                <h1>Entrar no Clarim</h1>
                <label htmlFor="email">E-mail</label>
                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Senha</label>
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} required />

                {erro && <p className='aviso'>{erro}</p>}

                <button type="submit">Entrar</button>

                <p className="rodape-form">
                    Ainda não é assinante? <Link to='/cadastro'>Crie sua conta</Link>
                </p>
            </form>
        </main>
    )
}

export default Login