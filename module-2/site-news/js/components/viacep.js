export async function buscarCep(cep) {
    let cepLimpo = cep.replace(/\D/g, '')

    if(cepLimpo.length !== 8) {
        throw new Error('O CEP deve ter 8 digitos.');
    }

    let resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
    let dados = await resposta.json()

    if(dados.erro){
        throw new Error('CEP não encontrado')
    }

    return dados
}

/*
    Criem um field de input de texto - CEP

    Ao clicar no botão, automaticamente vai preencher os demais campos
 */