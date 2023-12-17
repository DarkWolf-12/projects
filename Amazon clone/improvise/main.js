class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
            <header>
          
                
            </header>
        `;
  }
}
customElements.define("my-header", myHeader);
