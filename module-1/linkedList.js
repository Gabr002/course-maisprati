/* class Node {
    constructor(valor){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    insertFirst(value){
       let newNode = new Node(value);
       newNode.next = this.head;
       this.head = newNode; 
       this.length++;
    }

    insertLast(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }else{
            let actual = this.head;

            while(actual.next){
                actual = actual.next;
            }

            actual.next = newNode;    
        }   
        this.length++;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertFirst(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertLast(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{  
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    insertAt(index, value) {
        if(index < 0 || index > this.length){
            throw new RangeError('Índice fora dos limites da lista')
        }

        if(index === 0){
            return this.insertFirst(value);
        }

        let actual = this.head;

        for(let i = 1; i < index; i++){
            actual = actual.next;
        }
        
        let newNode = new Node(value);
        let previous = actual.prev;

        previous.next = newNode;
        
    }
}

let lista = new LinkedList();

lista.insertFirst(10); // lista 10
lista.insertFirst(20); // lista 20 -> 10
lista.insertLast(30); // lista 20 -> 10 -> 30

console.log(lista);  */

// =============================================================
// O QUE É UMA LINKED LIST (LISTA ENCADEADA)?
// =============================================================

// Uma linked list (lista encadeada) é uma estrutura de dados sequencial
// onde cada elemento (nó) armazena:

// 1. O valor (data)
// 2. Um ponteiro (next) que aponta para o próximo nó da sequência

// A lista possui apenas uma referência inicial:
//    head → primeiro nó

//
// Uma linked list é uma estrutura de dados formada por NÓS.
// Cada nó contém dois campos:
//   1. valor   — o dado que ele armazena
//   2. proximo — um ponteiro (referência) para o próximo nó
//
// Os nós NÃO precisam estar em posições consecutivas na memória.
// Cada um "aponta" para o próximo, formando uma corrente:
//
//   [head] ──► [ 40 | ──► ] ──► [ 30 | ──► ] ──► [ 20 | null ]
//
// O último nó aponta para null, sinalizando o fim da lista.
//
// =============================================================
// DIFERENÇA ENTRE LINKED LIST E ARRAY
// =============================================================
//
// | CARACTERÍSTICA             | ARRAY                        | LINKED LIST            |
// |----------------------------|------------------------------|------------------------|
// | Armazenamento              | Memória contígua (sequencial) | Memória dispersa       |
// | Acesso aleatório (O(1))     | Sim (índice direto)         | Não (necessário percorrer) |
// | Inserção / remoção no início| O(n) → todos deslocam     | O(1) → só muda o head |
// | Inserção / remoção no meio   | O(n) → deslocamento        | O(n) ou O(1) dependendo do acesso |
// | Inserção / remoção no final| O(1) (se houver espaço)     | O(1) (se tiver tail) |
// | Memória utilizada         | Contígua e fixa             | Dinâmica, só dos nós   |
//

//
//  ARRAY:
//  ┌────┬────┬────┬────┐
//  │ 40 │ 30 │ 20 │ 10 │   ← blocos lado a lado na memória
//  └────┴────┴────┴────┘
//    [0]  [1]  [2]  [3]
//
//  • Acesso direto por índice:  lista[2] = 20 em O(1)
//  • Tamanho geralmente fixo (ou caro de redimensionar)
//  • Inserir/remover no início exige deslocar TODOS os elementos
//
//  LINKED LIST:
//  [head]──►[40|►]──►[30|►]──►[20|null]
//            (em qualquer lugar da memória)
//
//  • Acesso por índice exige percorrer do início: O(n)
//  • Tamanho dinâmico: cresce/encolhe sem realocação
//  • Inserir/remover no início é O(1): só troca ponteiros
//
//  RESUMO:
//  ┌─────────────────────────────┬────────┬─────────────┐
//  │ Operação                    │ Array  │ Linked list │
//  ├─────────────────────────────┼────────┼─────────────┤
//  │ Acesso por índice           │ O(1) ✓ │ O(n)        │
//  │ Inserir/remover no início   │ O(n)   │ O(1) ✓      │
//  │ Memória contígua            │ sim    │ não         │
//  │ Tamanho dinâmico            │ caro   │ fácil ✓     │
//  └─────────────────────────────┴────────┴─────────────┘
//
// =============================================================

// Nó único da lista, contendo valor e referência ao próximo nó.
// É o "elo" da corrente: cada nó conhece apenas seu vizinho
// imediato à direita.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Estrutura principal da lista encadeada.
// Ela mantém apenas uma referência: o HEAD (cabeça), que é o
// primeiro nó. Para chegar a qualquer outro nó, é necessário
// "caminhar" a partir do head seguindo os ponteiros `proximo`.

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // Insere um novo valor no INÍCIO da lista — O(1).
    // Por que O(1)? Porque não precisamos percorrer nada:
    //   1. Criamos o novo nó
    //   2. Fazemos ele apontar para o atual head
    //   3. Atualizamos head para o novo nó
    // Em um array, isso seria O(n) pois desloca todos os elementos.
    insertFirst(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Insere um novo valor no FINAL da lista — O(n).
    // Precisamos percorrer toda a lista para achar o último nó
    // (aquele cujo `proximo` é null) e só então encadear o novo.
    // Dica: em uma lista duplamente encadeada, mantendo um ponteiro
    // `tail`, esta operação também seria O(1).
    insertLast(value) {
        let newNode = new Node(value);
        if (!this.head) {
            // lista vazia: o novo nó é o único, então vira o head
            this.head = newNode;
        } else {
            // percorre até encontrar o último nó (proximo === null)
            let actual = this.head;
            while (actual.next) {
                actual = actual.next;
            }
            actual.next = newNode; // encadeia o novo nó ao fim
        }
        this.length++;
    }

    // Remove e retorna o valor do primeiro nó - O(1)
    // Assim como insertFirst, só troca ponteiros:
    //  1. Salvamos o valor do head actual
    //  2. Movemos o head para o próximo nó
    //  3. O nó antigo fica sem referência e é coletado pelo garbage collector
    removeFirst() {
        if (!this.head) return null;
        const nodeRemoved = this.head.value;
        this.head = this.head.next;
        this.length--;
        return nodeRemoved.value;
    }

    // Busca o índice (0-based) de um valor - O(n)
    // Não há atalho: Sem índices, percorre um a um.
    // Isso é a principal devantagem da Linkedin List em relação ao Array
    search(value) {
        let actual = this.head;
        let index = 0;
        while (actual) {
            if (actual.value === value) return index;
            actual = actual.next;
            index++;
        }
        return -1;
    }

    // Retorna o número de elementos
    size() {
        return this.length;
    }

    // Converte a lista em string para fácil visualização
    // o símbolo -> representa o ponteiro next de cada nó.
    // "null" ao final indica que o último nó não está aponta para ninguém.
    printList() {
        let actual = this.head;
        let result = "";

        while (actual) {
            result += actual.value + " -> ";
            actual = actual.next;
        }
        result += "NULL"; // Indica o fim da lista
        console.log(result);
    }
}

// =========================
// EXEMPLO DE USO
// =========================

const lista = new LinkedList();

// InserirInicio empilha ao contrario: o último inserindo fica na frente
console.log("Inserindo no inicio: 10, 20, 30, 40");
lista.insertFirst(10);
lista.insertFirst(20);
lista.insertFirst(30);
lista.insertFirst(40);
lista.printList();  // 40 -> 30 -> 20 -> 10 -> NULL
console.log("Tamanho da lista: ", lista.size());

console.log("Buscando o elemento 20")
console.log(lista.search(20)); // retorna 2
console.log("Buscando o elemento 50")
console.log(lista.search(50)); // retorna -1

console.log("Removendo do início: ", lista.removeFirst()); // remove o 40
lista.printList();
console.log("Tamanho da lista: ", lista.size());

/*
    Por que usar linked list? Quando você precisa inserir e remover muito do início/fim e não precisa de acesso aleatório por índice — filas, pilhas, histórico de desfazer/refazer são casos clássicos.
    
    Por que preferir array? Quando o tamanho é previsível e você precisa acessar elementos por posição frequentemente — listas de items, buffers, tabelas.
*/ 