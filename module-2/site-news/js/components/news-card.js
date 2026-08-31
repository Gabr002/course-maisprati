class NewsCard extends HTMLElement {
    connectedCallback() {

        let categoria = this.getAttribute('categoria' || '');
        let titulo = this.getAttribute('titulo' || '');
        let resumo = this.getAttribute('resumo' || '');

        this.innerHTML = `
        <article class="cartao">
                <span class="categoria">${categoria}</span>
                <h3>${titulo}</h3>
                ${resumo ? `<p class="card__resumo">${resumo}</p>` : ''}
        </article>`
            ;
    }
}

customElements.define('news-card', NewsCard);