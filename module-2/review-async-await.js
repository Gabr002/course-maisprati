// function putWaterToBoil() {
//     console.log('Boil the water.')

//     setTimeout(() => {
//         console.log('We have boiled water')
//         makeCoffee()
//     }, 5000);
// }

// function getReadyToMakeCoffee() {
//     console.log('Grind coffee beans.')
//     console.log('Line the basket of your coffee maker with a filter.')
//     console.log('Wet the filter, and let it drain into your  cup.')
//     console.log('Discard the wather in the cup.')
//     console.log('Measure the ground coffee into the wet filter')
// }

// function makeCoffee() {
//     console.log('Pour water to wet the ground beans and drain into your')
// }

// putWaterToBoil()
// getReadyToMakeCoffee()
// makeCoffee()

// function ferverAgua (callback) {
//     console.log('Ferver a Água')

//     setTimeout(() => {
//         console.log('A água ferveu')
//         callback()
//     }, 5000);

// }

// function prepararCoado(callback) {
//     console.log('passo 1')
//     console.log('passo 2')
//     console.log('passo 3')
//     console.log('passo 4')
//     console.log('passo 5')
//     callback()
// }

// function passarCafe(callback) {
//     console.log('Despejar a água sobre o pó e deixar agir')
//     callback()
// }

// ferverAgua(() => {
//     prepararCoado(() => {
//         passarCafe(() => {
//             console.log('Seu café está pronto!')
//         })
//     })
// })

/* Um pouco mais sobre */
// 1) Synchronous Programming (Programação Síncrona)
/* const name = "mirian";
const greeting = `Hi, my name is ${name}.`;
console.log(greeting); */
// "Hello, my name is Miriam!"

/* function makeGreeting(name) {
    return `Hi, my name is ${name}.`;
}

const name = "mirian";
const greeting = `Hi, my name is ${name}.`;
console.log(greeting); */


// Forma antiga
/* esperar (300)
    .then(msg => {
        console.log('sucesso:', msg)
        return msg.length;
    })
    .then(tamanho => console.log('tamanho:', tamanho))
    .catch(erro => console.log('falhou:', erro.message))
    .finally(console.log('terminou.')) */


// A forma moderna
function versaoThen() {
    return esperar(200)
        .then(msg => console.log(msg))
        .catch(erro => console.log(err.message))

}


async function versaoAsync() {
    try {
        const msg = await esperar(200);
        console.log(msg)
    } catch (err) {
        console.log(err.message)
    }
}