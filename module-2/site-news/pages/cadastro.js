import { buscarCep } from "../js/components/viacep.js";

let form = document.querySelector('#form-cadastro')
let fieldCep = document.querySelector('#cep')

fieldCep.addEventListener('blur', async() => {
    if(!fieldCep.value) return

    try {
        let adress = await buscarCep(fieldCep.value)
        document.querySelector('#logradouro').value = adress.logradouro
        document.querySelector('#bairro').value = adress.bairro
        document.querySelector('#cidade').value = adress.localidade
        document.querySelector('#uf').value = adress.uf
    } catch (error) {
        console.error(error.message)
    }
})