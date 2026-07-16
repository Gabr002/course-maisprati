class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzina() {
        console.log(`${this.marca} ${this.modelo} Buzina: Bi bi bi!`);
    }
}

const uno = new Carro('Fiat', 'Uno', 2000);
const gol = new Carro('Volkswagen', 'Gol', 2005);

console.log(uno);
console.log(gol.ano);

uno.buzina();
console.log(gol.buzina());