// Get the navigation bar element
const navbar = document.querySelector(".navbar");

// Define the scroll position at which you want the navbar to appear
const scrollPosition = 100;

// Add an event listener to the window object that detects when the user scrolls
window.addEventListener("scroll", function () {
  // Check if the user has scrolled past the defined scroll position
  if (window.scrollY >= scrollPosition) {
    // Add the 'navbar-visible' class to the navbar element
    navbar.classList.add("navbar-visible");
  } else {
    // Remove the 'navbar-visible' class from the navbar element
    navbar.classList.remove("navbar-visible");
  }
});

// Show the button when the user scrolls down 20px
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top-btn").style.display = "block";
  } else {
    document.getElementById("back-to-top-btn").style.display = "none";
  }
}

// Scroll back to the top when the button is clicked
document.getElementById("back-to-top-btn").onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
