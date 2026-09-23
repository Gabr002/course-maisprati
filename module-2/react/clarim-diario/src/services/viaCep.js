import axios from 'axios'

export async function buscar(cep) {
    const cepLimpo = cep.replace(/\D/g, '');

    if (cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 digitos.')
    }

    const { data } = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`)

    if (data.erro) {
        throw new Error('CEP não encontrado!')
    }

    console.log(data)

    return data;
}