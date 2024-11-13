// Function to toggle the navigation menu
function openNavbar() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.toggle("active");
}

// Function to display a pop-up message and redirect to the home page
function showConfirmation() {
  alert("Thank you for your Details! We will get back to you shortly.");
  window.location.href = "index.html"; // Redirect to home page after alert
  return false; // Prevents form submission as the redirection is already triggered
}
