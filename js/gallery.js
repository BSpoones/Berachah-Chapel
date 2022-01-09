var slideIndex = 1;
showSlides(slideIndex); // Shows first slide when page is loaded

function plusSlides(n) {
  showSlides(slideIndex += n); // Next image
}

function currentSlide(n) {
  showSlides(slideIndex = n); // Previous image
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}   // Next button wraps around to the first image 
  if (n < 1) {slideIndex = slides.length}   // Goes to first image if there is only one
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";     // Makes all other images invisible when page is loaded
  }
  slides[slideIndex-1].style.display = "block";  // Displays selected slide
}