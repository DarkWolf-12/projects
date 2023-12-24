 

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

// Change background every 5 seconds (5000 milliseconds)
setInterval(() => changeSlide(1), 5000);


//code for footer and back to top button
function setLanguage(languageCode) {
    // Implement the logic to set the selected language
    console.log('Selected language:', languageCode);

 
     // Show the "Back to Top" button when scrolling down at footer
     window.onscroll = function() {
        showBackToTopButton();
    };
}
    function showBackToTopButton() {
        var button = document.getElementById("back-to-top");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }

    // Scroll to the top when the button is clicked
    function scrollToTop() {
        
        document.documentElement.scrollTop = 0;  
    }

 

    