class myHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="header">
                <h1>COMIDA RÁPIDA</h1>
            </div>
        </header>
        `
    }
}

customElements.define("my-custom-header", myHeader);