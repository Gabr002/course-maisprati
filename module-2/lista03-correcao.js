// 11. Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enquete), chamarProximo() dequeue() e exibirFila().
// Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada posição

// let fila = []

// function chegarPaciente(nome) {
//     fila.push(nome)
//     console.log(`Paciente "${nome}" chegou e entrou na fila`)

//     exibirFila()
// }

// function chamarProximo() {
//     if(fila.length === 0) {
//         console.log(`A fila está vazia. Não há pacientes para atender.`)
//         return
//     }

//     let atendido = fila.shift()
//     console.log(`Atendemos o paciente "${atendido}"`)

//     exibirFila()
// }

// function exibirFila() {
//     if(fila.length === 0) {
//         console.log(`A fila atual está vazia`)
//         return
//     }

//     console.log(`Fila atual: ${fila.join(", ")}\n`)
// }

// console.log("=== Chegada dos pacientes ===\n")

// chegarPaciente("Peter")
// chegarPaciente("Bruce")
// chegarPaciente("Matthew")
// chegarPaciente("Bilbo")
// chegarPaciente("Legolas")

// console.log("=== Inicio dos atendimentos ===\n")

// chamarProximo()
// chamarProximo()
// chamarProximo()

// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.

let inicio = null

function adicionar(tarefa) {
    let novoNo = { valor: tarefa, proximo: null }

    if (inicio === null) {
        inicio = novoNo
    } else {
        let atual = inicio

        while (atual.proximo !== null) {
            atual = atual.proximo
        }

        atual.proximo = novoNo
    }

    console.log(`Tarefa "${tarefa}" adicionada`)
}

function remover(tarefa) {
    if (inicio === null) {
        console.log(`Lista vazia. Não há tarefas para remover.`)
        return
    }

    if (inicio.valor === tarefa) {
        inicio = inicio.proximo
        console.log(`Tarefa "${tarefa}" removida`)
    }

    let anterior = inicio
    let atual = inicio.proximo

    while (atual !== null) {
        if (atual.valor === tarefa) {
            anterior.proximo = atual.proximo
        }

        anterior = atual
        atual = atual.proximo
    }

    console.log(`Tarefa "${tarefa}" não encontrada`)
}

function exibir() {
    if (inicio === null) {
        console.log(`Lista vazia`)
    }

    let atual = inicio
    let saida = ""

    while (atual !== null) {
        saida += atual.valor

        if (atual.proximo !== null) {
            saida += " -> "
        }

        atual = atual.proximo
    }

    atual.proximo = novoNo
}

console.log("=== Adicionando tarefas ===")
console.log("Estudar front-end")
console.log("Lavar a louça")
console.log("Responder e-mails")
console.log("Estudar front-end")
console.log("Estudar front-end")

exibir()

console.log("=== Removendo uma tarefa ===")
console.log("Responder e-mails")

exibir()
