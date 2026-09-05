const CHAVE_USUARIO = 'usuarios';
const CHAVE_SESSAO = 'usuarioLogado';

function lerUsuarios() {
    const json = localStorage.getItem(CHAVE_USUARIO)

    return json ? JSON.parse(json) : [];
}

export function registrarUsuario(usuario) {
    const usuarios = lerUsuarios();

    if (usuarios.some(user => user.email === usuario.email)) {
        throw new Error('E-mail já cadastrado');
    }

    usuarios.push(usuario);
    localStorage.setItem(CHAVE_USUARIO, JSON.stringify(usuarios));
}

export function login(email, senha) {
    const usuarios = lerUsuarios();

    const usuario = usuarios.find(user => user.email === email && user.senha === senha);

    if (!usuario) {
        throw new Error('Email ou senha incorretos.');
    }

    localStorage.setItem(CHAVE_SESSAO, JSON.stringify({
        email: usuario.email
    }));

    return usuario;
}