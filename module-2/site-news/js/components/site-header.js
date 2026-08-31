class siteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="cabecalho">
                <a href="diario.html" class="logo">Clarim Diário</a>
                <nav class="navegacao">
                    <a href="#">Política</a>
                    <a href="#">Economia</a>
                    <a href="#">Esportes</a>
                    <a href="#">Homem Aranha</a>
                </nav>
            </header>`
            ;
    }
}

customElements.define('site-header', siteHeader);