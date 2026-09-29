import './Header.css'
import { useAuth } from '../../Context/AuthContext.jsx'
import { Link } from 'react-router-dom'

// A linha 4 define a função Header recebendo as propriedades 'tema' e 'aoAlternarTema'
function Header({ tema, alterTheme }) {

    const { usuario, logout } = useAuth()

    const hoje = new Date().toLocaleDateString('pt-BR', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    })

    return (
        <header className="cabecalho">
            <div className="cabecalho__faixa">
                <span>Eles são de Nova York </span>
                <span>{hoje}</span>

                {usuario ? (
                    <span className="cabecalho__sessao">
                        Olá, {usuario.nome}
                        {' . '}
                        <Link to='/painel'>Painel</Link>
                        {' . '}
                        <button onClick={logout} className="cabecalho__logout">Sair</button>
                    </span>
                ) : (
                    <Link to='/login' className='cabecalho__entrar'>Entrar</Link>
                )}

                <span>$0.50</span>

                <button className="cabecalho__tema" onClick={alterTheme}>
                    {tema === 'light' ? 'Escuro' : 'Claro'}
                </button>
            </div>

            <h1 className="cabecalho__titulo">O CLARIM DIÁRIO</h1>
            <p className="cabecalho__lema">A verdade doa quem doer - Inclusive a certos aracnídeos</p>

            <nav className="cabecalho__menu">
                <a href="">Cidade</a>
                <a href="">Ameaças Urbanas</a>
                <a href="">Opinião do editor</a>
                <a href="">Esportes</a>
                <a href="">classificados</a>
            </nav>
        </header>
    )
}

export default Header


// 13:14:29