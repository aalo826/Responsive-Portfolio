// View projects button scroll
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({
      behavior: 'smooth'
    });
  }

// Contact form submission
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    // Prevent form from refreshing the page
    event.preventDefault();

    // Clear the input fields
    this.reset();

    // Display the submission message
    const messageDiv = document.getElementById("submission-message");
    messageDiv.style.display = "block";

    // Hide the message
    setTimeout(() => {
      messageDiv.style.display = "none";
    }, 10000); // Hides message after delay
  });



// Toggle mobile dropdown menu
function toggleMenu() {
  var menu = document.getElementById("m-nav");

  // If the menu is already visible, hide it
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  }
  // Else it will show the menu since it is not visible
  else {
    menu.style.display = "flex";
  }
}

// Close the mobile menu when a link is clicked
document.querySelectorAll('#m-nav a').forEach(function(link) {
  link.addEventListener('click', function() {
    var menu = document.getElementById("m-nav");
    menu.style.display = "none";
  });
});

// Close the mobile menu when the window is resized
window.addEventListener('resize', function() {
  var menu = document.getElementById("m-nav");

  // Check if the window width is greater than or equal to 990px
  if (window.innerWidth >= 990) {
    menu.style.display = "none"; // Hide the menu when resizing
  }
});