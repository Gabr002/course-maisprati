function CardUsuario({ nome, curso }) {
    return (
        <>
            <div className="card">
                <h2>Nome: {nome}</h2>
                <h3>Curso: {curso}</h3>
            </div>
        </>
    )
}

export default CardUsuario