/* Testes com AAA - Arrange, Act, Assert */

/* DDD - Domain-driven design, SOLID, Clean code */

let totalTestes = 0;
let testesOk = 0;

function expect(valorRecebido) {
    return {

        toBe(valorEsperado) {
            totalTestes++;
            if (valorRecebido == valorEsperado) {
                testesOk++;
                console.log(`OK: ${valorRecebido} === ${valorEsperado}`);
            } else {
                console.log(`NOK: ${valorRecebido} !== ${valorEsperado}`);
            }
        }
    }
}

function test(nome, funcaoDeTeste) {
    funcaoDeTeste()
}

function resumoFinal() {
    console.log(`Total: ${totalTestes}, OK: ${testesOk}`);
}