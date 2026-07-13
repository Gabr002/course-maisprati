class Animal {
    #energia = 100;

    constructor(nome, som) {
        this.nome = nome;
        this.som = som;
        this.#energia = 100;
    }

    falar() {
        console.log(`Eu sou um ${this.nome}, faço: ${this.som}, e minha energia é ${this.#energia}`);
    }

    mover(distancia) {
        this.#energia -= distancia;
        console.log(`${this.nome} se moveu ${distancia}m. Minha energia agora é ${this.#energia}`);
    }

    // ---------------------------------------------------------
    // 4. GETTER
    // ---------------------------------------------------------
    // Parece uma prioridade para quem usa, mas executa lógica.
    // Acesso: Animal.status {sem parênteses, como se fosse prop}
    get status() {
        if (this.#energia > 60) return `${this.name} está com energia alta`;
        if (this.#energia > 30) return `${this.name} está cansado`;
        return `${this.nome} está exausto`;
    }

    // ---------------------------------------------------------
    // 4. SETTER
    // ---------------------------------------------------------
    // intercepta uma atribuição e permite validar antes de salvar.
    // Uso: animal.energia = 80 (sem parênteses, como uma prop)
    set energia(valor) {
        if (valor < 0 || valor > 100) {
            throw new Error("Energia inválida");
        }
        this.#energia = valor;
    }

    // ---------------------------------------------------------
    // 3. MÉTODO ESTÁTICO
    // ---------------------------------------------------------
    // Pertence à CLASSE, não às instâncias. Chamado como:
    //   Animal.comparar(a, b)  ← correto
    //   meuAnimal.comparar()   ← erro: não existe na instância
    //
    // Use para utilitários que fazem sentido no contexto da
    // classe mas não dependem de um objeto específico.
    static comparar(a, b) {
        console.log(`Comparando ${a.nome} e ${b.nome}:`);
        console.log(` ${a.nome} faz "${a.som}" | ${b.nome} faz "${b.som}"`);
    }

    // ---------------------------------------------------------
    // 3. PROPRIEDADE ESTÁTICA
    // ---------------------------------------------------------
    static especie = "mamifero";

    // =============================================================
    // 5. HERANÇA COM extends
    // =============================================================
    //
    // `extends` faz Cachorro herdar TUDO de Animal: propriedades,
    // métodos, getter, setter. Cachorro é uma especialização de
    // Animal — tem tudo que Animal tem, mais o que definir aqui.
    //
    // Regra obrigatória: se uma classe filha tem constructor, ela
    // DEVE chamar super() antes de usar `this`. O super() executa
    // o constructor da classe pai, garantindo que as propriedades
    // herdadas sejam inicializadas corretamente.
}


class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Au au"); // O super é obrigatório porque a classe filha tem constructor
        this.raca = raca;
    }

    // ---------------------------------------------------------
    // 6. SOBRESCRITA DE MÉTODO (override)
    // ---------------------------------------------------------
    // Cachorro tem seu próprio
    falar() {
        console.log(`${this.nome} faz: "Au au"`); // Adiciona um uivo de cachorro no final
    }

    // Método exclusivo de cachorro - Animal não tem isso
    BuscarOsso() {
        console.log(`${this.nome} vai buscar o osso!`);
    }

}


// =============================================================
// 5 + 6. SEGUNDA FILHA: Gato
// =============================================================
//
// Outra especialização de Animal, completamente independente
// de Cachorro. Demonstra que a mesma classe pai pode gerar
// filhos com comportamentos completamente diferentes.

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "Miau");
        this.cor = cor;
    }

    // 6. Override: Gato sobrescreve falar com comportamento próprio
    falar() {
        const tipo = this.ehDomestico ? 'doméstico' : 'selvagem';
        console.log(`${this.nome} é um gato ${tipo} e faz: "Miau"`);
    }

    // Método exclusivo de gato - Animal não tem isso
    ronronar() {
        console.log(`${this.nome} ronrona baixinho`);
    }
}


// =============================================================
// EXEMPLO DE USO
// =============================================================

console.log('=== Propriedade estática ===');
// Pertence à classe não às instâncias
console.log(Animal.especie);

console.log('\n=== Instâncias e métodos ===');
const rex = new Cachorro("Rex", "Pastor Alemão");
const mel = new Gato("Mel", "Preta");

rex.falar();
mel.falar();

console.log('\n=== Método herdado ===');
// mover() não foi definido em Cachorro nem Gato — vem de Animal
rex.mover(50); // Esse 50 é a distancia que o rex percorreu
mel.mover(30); // Esse 30 é a distancia que a mel percorreu

console.log('\n=== Getter ===');
// Parece acesso a propriedade, executa lógica internamente
console.log(mel.status); // O status é 
console.log(rex.status);

console.log('\n=== Setter ===');
// Intercepta atribuição, valida antes de salvar
mel.energia = 150; //Vai dar erro, pois energia está privada

console.log('\n=== Setter com validação ===');
rex.energia = 40;
console.log(rex.status);

try {
    mel.energia = 150;
} catch (error) {
    console.error(error.message);
}

console.log('\n=== Método estático ===');
// Chamado na classe, não na instância
Animal.comparar(rex, mel);


