class myHeader extends HTMLElement{
    connectedCallback(){
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
              
              <select  class="search-select" onchange="handleSelection()">
                <option value="all department">All</option>
                <option value="Art">Art & Carft</option>
                <option value="Automotive">Automotive</option>
                <option value="Baby">Baby</option>
                <option value="Books">Books</option>
                <option value="Electronic">Electronic</option>
                <option value="Mobile">Mobile</option>
                <option value="computer">Computers</option>
            </select>
            <input class="search-bar" type="text" id="search-input" placeholder="Search for items...">
              <div class="search-icon">
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
            </div>
    
            <div class="language border" onclick="#">EN</div>
    
           
            <div class="dropdown">
              <button> <a href = "http://127.0.0.1:5500/Amazon%20clone/login%20for%20amazon/log-amz.html ">
                  <!-- <p class="ps"> Hello, sign in </p>
                  <p class="pa"> Account & lists </p></a> -->
                  <div class="sign-in border">
                    <p><span>Hello,sign in</span></p>
                    <p class="acc-order">Account & Lists</p>
                  </div>
              </button>
              <div class="dropdown-content">
                    <div class="box1">  <a href="http://127.0.0.1:5500/Amazon%20clone/login%20for%20amazon/log-amz.html">sign in</a></div>
    
    
                    <p class="box_1_2nd">New customor? <a href="#">Start here.</a></p>
                    <div class="divider1"></div>
                  <div class="container">
                    <div class="box2">
                      <h3>Your Lists</h3><br>
                      <a href="#">Create a list</a></br>
                      <a href="#">Find a list or registry</a>
                    </div>
                    <div class="divider2"></div>
                    <div class="box3">
                      <h3>Your Account</h3><br>
                      <a href="#">Account</a></br>
                      <a href="#">Orders</a></br>
                      <a href="#">Recommendations</a></br>
                      <a href="#">Browsing History</a></br>
                      <a href="#">Watchlist</a></br>
                      <a href="#">Video Purchases & Rentals</a></br>
                      <a href="#">Kindle Unlimited</a></br>
                      <a href="#">Content & Devices</a></br>
                      <a href="#">Subscribe & Subscriptions</a></br>
                      <a href="#">Memberships & Subscriptions</a></br>
                      <a href="#">Music Library</a></br>
                    </div>
                  </div>
              </div>
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
      
       <main>
        <div class="sub-bar">
           
          <div id="menuButton" onclick="toggleMenu()"> &#9776 All </div>
    
          <!-- Side menu -->
          <div class="side-menu" id="mySideMenu">
            
            <a href="javascript:void(0)" onclick="closeMenu()"><i class="fa-solid fa-xmark"></i></a>
            <a href="#" class="side-sign"  ><i class="fa-regular fa-user"></i>  Hello, sign in </a>
            
            <div>
    
             <h1 class="side-head">Digital Content & Devices</h1>
                <ul class="side-list">
                  <li> <a href="#" class="side-list" >  Amazon Music</a></li>
                <li>  <a href="#" class="side-list" >Kindle e-reder & Books</a></li>
                <li> <a href="#" class="side-list" >Amazon Appstore</a></li>
              </ul>
            
            </div>
            <div>
    
              <h1 class="side-head">Shop By Department</h1>
                 <ul class="side-list">
                   <li> <a href="#" class="side-list" >Electronics</a></li>
                 <li>  <a href="#" class="side-list" >computers</a></li>
                 <li> <a href="#" class="side-list" >Smart Home</a></li>
                 <li> <a href="#" class="side-list" >Arts & Crafts</a></li>
                 <li>  <a href="#" class="side-list" >Automotive</a></li>
                 <li> <a href="#" class="side-list" >Baby</a></li>
               </ul>
             
             </div>
             <div>
    
              <h1 class="side-head">Programs & Features</h1>
                 <ul class="side-list">
                   <li> <a href="#" class="side-list" >Gift Cards</a></li>
                 <li>  <a href="#" class="side-list" >Shop by Intrest</a></li>
                 <li> <a href="#" class="side-list" >Amazon Live</a></li>
               </ul>
             
             </div>
            
          </div>
            <div class="today-deal">Today's Deals</div>
            <div class="registry">Registry</div>
            <div class="customer">Customer Service</div>
            <div class="gift">Gift Card</div>
            <div class="sell"  >Sell</div>
        </div>
    </main>
    </header>
        `
    }
  }
  customElements.define("my-header",myHeader);

  // for nav bar and all option

  function handleSelection() {
         
    let selectedValue = document.getElementById("fruitDropdown").value;

    
    document.getElementById("selectedFruit").innerHTML = '';
}

 

// for search bar
let searchInput = document.getElementById('search-input');
let items = document.getElementsByClassName('item');

// Add click event listeners to each item
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', onItemClick);
}

function onItemClick(event) {
    let detailPage = event.target.getAttribute('data-detail');
    window.location.href = detailPage;
}

// Add input event listener to the search bar
searchInput.addEventListener('input', filterItems);

function filterItems() {
    let input = searchInput.value.toLowerCase();

    for (let i = 0; i < items.length; i++) {
        let item = items[i].innerText.toLowerCase();
        if (item.includes(input)) {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}

//for side menu
//for side

function toggleMenu() {
  let sideMenu = document.getElementById("mySideMenu");
  if (sideMenu.style.width === "250px") {
      closeMenu();
  } else {
      openMenu();
  }
}


function openMenu() {
  document.getElementById("mySideMenu").style.width = "350px";
  document.getElementById("menuButton").style.marginLeft = "360px";
  document.getElementById("content").style.marginLeft = "250px";
  
}

function closeMenu() {
  document.getElementById("mySideMenu").style.width = "0";
  document.getElementById("menuButton").style.marginLeft = "0";
  document.getElementById("content").style.marginLeft = "0";
}

//for slide background
const backgroundSlider = document.getElementById('background-slider');
const images = document.querySelectorAll('#background-slider img');
let currentImageIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
      if (i === index) {
          image.style.opacity = 1;
      } else {
          image.style.opacity = 0;
      }
  });
}

function changeSlide(direction) {
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  showImage(currentImageIndex);
}
