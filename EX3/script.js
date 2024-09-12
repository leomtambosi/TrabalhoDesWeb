let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

// Show the slide at a specific index
function showSlides(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";  
  dots[slideIndex].className += " active";
}

// Go to the next or previous slide
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

// Set a specific slide based on dot click
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides(slideIndex);
}

// Automatic slide transition
function autoShowSlides() {
  plusSlides(1);
  setTimeout(autoShowSlides, 3000); // Change image every 3 seconds
}

// Initialize the first slide and start the auto transition
showSlides(slideIndex);
autoShowSlides();