// =============================================================
// O QUE É UMA LISTA DUPLAMENTE ENCADEADA?
// =============================================================
//
// Na lista simplesmente encadeada cada nó conhecia apenas o
// PRÓXIMO. Aqui cada nó conhece os DOIS vizinhos:
//
//   null ⇄ [ 30 | ⇄ ] ⇄ [ 20 | ⇄ ] ⇄ [ 10 | ⇄ ] ⇄ null
//             ↑                                 ↑
//            head                              tail
//
// A lista também passa a guardar dois ponteiros externos:
//   • head → primeiro nó
//   • tail → último nó
//
// =============================================================
// O QUE MUDA EM RELAÇÃO À LISTA SIMPLES?
// =============================================================
//
//  LISTA SIMPLES:
//  • Cada nó tem: valor + proximo
//  • Só consegue andar para FRENTE
//  • inserirFim é O(n) — precisa chegar até o final
//  • Não consegue "voltar" de um nó para o anterior
//
//  LISTA DUPLA:
//  • Cada nó tem: valor + anterior + proximo
//  • Consegue andar para FRENTE e para TRÁS
//  • inserirFim é O(1) — tail aponta direto para o fim
//  • removerFim é O(1) — idem (na lista simples seria O(n))
//  • Custo: ocupa mais memória (um ponteiro extra por nó)
//
//  RESUMO DE COMPLEXIDADE:
//  ┌──────────────────────────┬──────────────┬─────────────┐
//  │ Operação                 │ Lista simples│ Lista dupla │
//  ├──────────────────────────┼──────────────┼─────────────┤
//  │ Inserir no início        │ O(1)         │ O(1)        │
//  │ Inserir no fim           │ O(n)         │ O(1) ✓      │
//  │ Remover no início        │ O(1)         │ O(1)        │
//  │ Remover no fim           │ O(n)         │ O(1) ✓      │
//  │ Inserir/remover no meio  │ O(n)         │ O(n)        │
//  │ Percorrer ao contrário   │ impossível   │ O(n) ✓      │
//  └──────────────────────────┴──────────────┴─────────────┘
//
//  QUANDO USAR LISTA DUPLA?
//  • Quando você precisa navegar nos dois sentidos
//  • Quando remove muito do FIM (ex: pilha, deque)
//  • Exemplos reais: histórico do browser (←/→),
//    playlist de música, cache LRU
//
// =============================================================
// 
// Nó duplamente encadeado: guarda valor e ponteiros para os dois vizinhos.
// Diferente do nó simples, ele "conhece" quem está antes e depois de si.
class Node {
    constructor(value) {
        this.value = value; // armazena o valor
        this.prev = null;   // aponta para o nó anterior
        this.next = null;   // aponta para o próximo nó
    }
}
// 
// Estrutura principal. O diferencial aqui é o ponteiro `tail`:
// ele elimina a necessidade de percorrer toda a lista para
// operar no fim, tornando inserirFim e removerFim O(1).
class DoublyLinkedList {
    constructor() {
        this.head = null; // ponteiro para o primeiro nó
        this.tail = null; // ponteiro para o último nó
        this.length = 0;  // quantidade de nós
    }

    // ====================================================
    // Insere valor no INÍCIO — O(1)
    // ====================================================
    // Passos com a lista [ C ⇄ B ⇄ A ] ao inserir "D":
    //   antes:  head → C
    //   depois: head → D ⇄ C ⇄ B ⇄ A
    insertFirst(value) {
        const newNode = new Node(value);  // 1) cria nó

        if (!this.head) {
            // Lista vazia: novo nó é o único elemento
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; // Novo aponta para o antigo head
            this.head.prev = newNode; // Antigo head aponta de volta
            this.head = newNode; // Head passa a ser o novo nó
        }
        this.length++;
    }

    // ====================================================
    // Insere valor no FIM — O(1) graças ao ponteiro tail
    // ====================================================
    // Na lista simples isso seria O(n) porque o tail era 
    // preciso percorrer tudo. Aqui chegamos direto ao fim.
    // Passos com [ C ⇄ B ⇄ A ] ao inserir "Z":
    //   antes:  tail → A
    //   depois: C ⇄ B ⇄ A ⇄ Z ← tail
    insertLast(value) {
        const newNode = new Node(value); // 1) cria nó

        if (!this.tail) {
            // Lista vazia: mesmo comportamento do inserirInicio
            this.head = newNode;
            this.tail = newNode;
        } else {
            // Encadeia o novo nó depois do tail atual
            this.tail.next = newNode; // Tail aponta para o novo
            newNode.prev = this.tail; // Novo aponta de volta para o tail
            this.tail = newNode; // Tail passa a ser o novo nó
        }
        this.length++;
    }
    // ====================================================
    // Insere valor em posição específica (índice 0-based) — O(n)
    // ====================================================
    // Nos extremos reutiliza inserirInicio/inserirFim (O(1)).
    // No meio, percorre até o índice e reencadeia os ponteiros
    // dos dois lados — por isso continua O(n).
    insertAt(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) return this.insertFirst(value);
        if (index === this.length) return this.insertLast(value);

        // Percorre até o nó que está ATUALMENTE no índice alvo
        let actual = this.head;
        for (let i = 1; i <= index; i++) {
            actual = actual.next;
        }

        // Encaixa o novo nó entre `prev` e `actual`.
        // antes: anterior ⇄ atual
        //   depois: anterior ⇄ novoNo ⇄ atual
        const newNode = new Node(value);
        const prev = actual.prev;

        prev.next = newNode;
        newNode.prev = prev;
        newNode.next = actual;
        actual.prev = newNode;

        this.length++;
    }

    // ====================================================
    // Remove e retorna valor do nó em posição específica — O(n)
    // ====================================================
    // Casos especiais (único nó, head, tail) são O(1).
    // Remoção no meio exige percorrer até o índice: O(n).
    // A vantagem sobre a lista simples aparece na remoção
    // do tail: O(1) aqui, O(n) na lista simples.
    removeAt(index) {
        if (index < 0 || indice >= this.length) {
            throw new RangeError('ìndice fora dos limites');
        }

        let remove;

        if (this.length === 1) {
            // Único nó: Esvazia a lista completamente
            remove = this.head;
            this.head = null;
            this.tail = null;
        }
        else if (index === 0) {
            // Remove o head -- O(1)
            remove = this.head;
            this.head = this.head.next;
            this.head.prev = null; // O novo head não aponta para nada atrás
        }
        else if (index === this.length - 1) {
            // Remove o tail -- O(1)
            remove = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null; // O novo tail não aponta para nada na frente
        }
        else {
            // Remove no meio -- O (n): percorre até o índice
            let actual = this.head;
            for (let i = 1; i <= index; i++) {
                actual = actual.next;
            }

            // Ponte entre vizinhos, pulando o nó removido:
            // antes: prev ⇄ actual ⇄ depois
            //   depois: prev ⇄ depois
            const prev = actual.prev;
            const next = actual.next;

            prev.next = next;
            next.prev = prev;

            remove = actual;
        }
        this.length--;
        return remove.value;
    }
    // ====================================================
    // Imprime do head ao tail — percurso natural (→)
    // ====================================================
    printFront() {
        let actual = this.head;
        let str = '';

        while (actual) {
            str += `${actual.value} ↔ `;
            actual = actual.next;
        }
        console.log(str + 'null');
    }

    // ====================================================
    // Imprime do tail ao head — percurso reverso (←)
    // ====================================================
    // Isso é IMPOSSÍVEL em uma lista simples sem percorrer
    // tudo novamente. Aqui é direto graças ao ponteiro `anterior`.
    printReverse() {
        let actual = this.tail;
        let str = '';

        while (actual) {
            str += `${actual.value} ↔ `;
            actual = actual.prev;
        }
        console.log(str + 'null');
    }

    // Retorna o tamanho de nós - O(1) graças ao contador `length`
    size() {
        return this.length;
    }
}

// =========================
// EXEMPLO DE USO
// =========================
const listDoubly = new DoublyLinkedList();

listDoubly.insertLast(1);
listDoubly.insertLast(2);
listDoubly.insertLast(3);

listDoubly.printFront();
listDoubly.printReverse();
listDoubly.size();