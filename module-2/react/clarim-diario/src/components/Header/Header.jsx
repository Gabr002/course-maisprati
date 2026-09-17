import './Header.css'

function Header() {
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
                <span>$0.50</span>
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