import { registrarUsuario } from './autenticador.js'

const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')

// Registrar o usuário ao enviar o formulário 
form.addEventListener('submit', (evento) => {

    evento.preventDefault()  //IMPEDE QUE O FORMULÁRIO ENVIE OS DADOS PARA O BACKEND

    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }

    try {
        registrarUsuario(usuario);
        alert('Usuário cadastrado com sucesso!');
        window.location.href = './login.html';
    } catch (error) {
        aviso.textContent = error.message;
    }
})