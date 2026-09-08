const { adicionarItem, calcularTotal, limparCarrinho, contarItens } = require("./carrinho.js")

beforeEach(() => {
    limparCarrinho()
})

test("deve adicionar um  item ao carrinho", () => {
    adicionarItem("camiseta", 49.90)
    expect(contarItens()).toBe(1)
})

test("Deve adicionar o total corretamente com vários itens", () => {
    adicionarItem("camiseta", 49.90)
    adicionarItem("calça", 89.90)

    expect(calcularTotal()).toBe(139.8)
})