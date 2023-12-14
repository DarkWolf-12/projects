class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` 
            <header>
            <div class="nav-bar">
            <div class="nav-logo">
              <div class="logo border"></div>
            </div>
    
            <div class="nav-deliver border">
              <p class="de">Deliver To</p>
              <div class="deliver-icon">
                <i class="fa-solid fa-location-dot location"></i>
                <p class="Ne">Nepal</p>
              </div>
            </div>
            <div class="nav-search">
              <select name="" class="search-select">
                <option value="">All</option>
              </select>
    
              <input type="text" placeholder="Search Amazon" class="search-bar" />
              <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
    
            <div class="language border" onclick="#">EN</div>
    
            <div class="sign-in border">
              <p><span>Hello,sign in</span></p>
              <p class="acc-order">Account & Lists</p>
            </div>
            <div class="sign-in border">
              <p><span>Returns</span></p>
              <p class="acc-order">& Orders</p>
            </div>
          
            <div class="cart border">
              <i class="fa-solid fa-cart-shopping cartt"></i>
              <p class="ca">Cart</p>
            </div> 
    
          </div>
                
            </header>
        `;
  }
}
customElements.define("my-header", myHeader);
