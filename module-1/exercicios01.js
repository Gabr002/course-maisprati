// Problema 1
    const prompt = require('prompt-sync')();

    // let nota = Number(prompt('Qual a sua nota: '));

    // if(nota >= 7) console.log("Aprovado!")
    // else if(nota >= 5) console.log("Recuperação!")
    // else console.log("Reprovado!")

// Problema 2

    // let idade = Number(prompt('Ano da sua data de nascimento: '))
    // idade = 2026 - idade;

    // if(idade <= 12) console.log("Criança!")
    // else if(idade <= 17) console.log("Adolescente!")
    // else if(idade <= 59) console.log("Adulta!")
    // else console.log("Idosa!")
    
// Problema 3

    // let salario = Number(prompt('Salario mensal: '))
    // let percentual = Number(prompt('percentual de aumento: '))

    // if(salario < 1500){ 
    //     let novoSalario = (percentual/100)*salario;
    //     novoSalario *= 2
    //     novoSalario += salario
    //     console.log("novo salario : " + novoSalario)
    // }
    // else {
    //     let novoSalario = (percentual/100)*salario;
    //     novoSalario += salario
    //     console.log("novo salario : " + novoSalario)
    // }

// Problema 4

    // let n1 = Number(prompt('Digite o numero 1: '))
    // let n2 = Number(prompt('Digite o numero 2: '))
    // let n3 = Number(prompt('Digite o numero 3: '))

    // if(n1 > n2 && n1 > n3) console.log("numero 1 é o maior!")
    // else if(n2 > n1 && n2 > n3)console.log("numero 2 é o maior!")
    // else console.log("numero 3 é o maior!")

// Problema 5

    // let valorCompra = Number(prompt('valor da compra: '))

    // if(valorCompra < 100){
    //     console.log("Valor original: " + valorCompra)
    //     let desconto = (0/100) * valorCompra;
    //     console.log("Desconto aplicado: " + desconto)
    //     console.log("Valor final a pagar: " + (valorCompra - desconto))
    // }
    // else if(valorCompra < 300){
    //     console.log("Valor original: " + valorCompra)
    //     let desconto = (10/100) * valorCompra;
    //     console.log("Desconto aplicado: " + desconto)
    //     console.log("Valor final a pagar: " + (valorCompra - desconto))
    // }
    // else if(valorCompra < 500){
    //     console.log("Valor original: " + valorCompra)
    //     let desconto = (15/100) * valorCompra;
    //     console.log("Desconto aplicado: " + desconto)
    //     console.log("Valor final a pagar: " + (valorCompra - desconto))
    // }
    // else{
    //     console.log("Valor original: " + valorCompra)
    //     let desconto = (20/100) * valorCompra;
    //     console.log("Desconto aplicado: " + desconto)
    //     console.log("Valor final a pagar: " + (valorCompra - desconto))
    // }

// problema 6

    // let valor = Number(prompt('Valor que deseja sacar: '))
    // let n100 = 0, n50 = 0, n20 = 0, n10 = 0

    // while(valor){
    //     if(valor >= 100){
    //         n100++
    //         valor -= 100
    //     }
    //     else if(valor >= 50){
    //         n50++
    //         valor -= 50
    //     }
    //     else if(valor >= 20){
    //         n20++
    //         valor -= 20
    //     }
    //     else{
    //         n10++
    //         valor -= 10
    //     }
    // }

    // console.log("Total de notas de 100: " + n100)
    // console.log("Total de notas de 50: " + n50)
    // console.log("Total de notas de 20: " + n20)
    // console.log("Total de notas de 10: " + n10)

// Problema 7

    let p1 = Number(prompt('Numero 1: '))
    let p2 = Number(prompt('Numero 2: '))

    let op = Number(prompt('\nOPERACOES\n=========== \n1 - somar\n2 - subtrair\n3 - multiplicar\n4 - dividir\n=======\n\nNUMERO DA OPERACAO: '))

    if(p2 == 0 && op == 4){ 
        op = 5
    }

    switch(op){
        case 1:
            console.log("\nRESULTADO DA SOMA: " + (p1+p2))
            break
        case 2:
            console.log("\nRESULTADO DA SUBTRACAO: " + (p1-p2))
            break
        case 3:
            console.log("\nRESULTADO DA MULTIPLICACAO: " + (p1*p2))
            break
        case 4:
            console.log("\nRESULTADO DA DIVISAO: " + (p1/p2))
            break
        default:
            console.log("\n\nOPERACAO INVALIDA!")
    }

// Problema 8

    let tamanho = Number(prompt('TAMANHO DA PIZZA: (P, M ou G)'))
    let borda = Number(prompt('TIPO DE BORDA: (tradicional ou recheada)'))

    


