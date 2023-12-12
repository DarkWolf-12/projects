class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = ` 
            <header>
                <hgroup><img src="image/logo.png" alt="Logo"></hgroup>
                
            </header>
        `
    }
}
customElements.define("my-header",myHeader);