import './Cadastro.css'
import { useState } from 'react';
import { buscar } from '../../services/viaCep.js'

function Cadastro() {

    const [form, setForm] = useState({
        logradouro: '',
        bairro: '',
        cidade: '',
        uf: ''
    });

    async function handleBuscaCep(event) {
        const data = await buscar(event.target.value)

        setForm({
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            uf: data.uf
        });
    }


    return (
        <main className="auth">
            <form id="form-cadastro" className="formulario">
                <h1>Criar Conta</h1>
                <label htmlFor="nome">Nome Completo</label>
                <input type="text" id="nome" name="nome" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" name="senha" required />

                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" name="cep" placeholder="00000000" required onBlur={handleBuscaCep} value={form.cep} />

                <div className="linha">
                    <div className="campo-largo">
                        <label htmlFor="logradouro">Rua</label>
                        <input type="text" id="logradouro" value={form.logradouro} readOnly />
                    </div>
                    <div className="campo-curto">
                        <label htmlFor="numero">Número</label>
                        <input type="text" id="numero" value={form.numero} readOnly />
                    </div>
                </div>

                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" value={form.bairro} readOnly />

                <div className="linha">
                    <div className="campo-largo">
                        <label htmlFor="cidade">Cidade</label>
                        <input type="text" id="cidade" value={form.cidade} readOnly />
                    </div>
                    <div className="campo-curto">
                        <label htmlFor="uf">Estado</label>
                        <input type="text" id="uf" value={form.uf} readOnly />
                    </div>
                </div>

                <p id="aviso" className="aviso"></p>

                <button type="submit" className="btn btn-primary">Cadastrar</button>

                <p className="rodape-form">Já tem uma conta? <a href="login.html">Entrar</a></p>
            </form>
        </main>
    )
}

export default Cadastro
