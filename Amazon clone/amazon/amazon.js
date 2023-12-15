function handleSelection() {
         
    let selectedValue = document.getElementById("fruitDropdown").value;

    
    document.getElementById("selectedFruit").innerHTML = '';
}


function toggleMenu() {
    var sideMenu = document.getElementById("mySideMenu");
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