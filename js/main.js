// Function to scroll to a specific section on the page
function scrollToSection(event, sectionId) {
  event.preventDefault();

  // Finds the section with the given ID
  var section = document.getElementById(sectionId);

  // Checks if the section was found
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  } else {
    console.error("Section with ID " + sectionId + " not found.");
  }
}

// Function to close the menu
function closeMenu() {
  const menu = document.querySelector(".menu");
  if (menu.classList.contains("active-menu")) {
    menu.classList.remove("active-menu");
  }
}

// Waits for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.querySelector(".toggle-menu");

  // Adds a click event listener to the toggle menu
  toggleMenu.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active-menu");
  });

  // Selects all section links and adds an event listener for scrolling
  const sectionLinks = document.querySelectorAll('a[href^="#"]');
  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const sectionId = this.getAttribute("href").substring(1);
      scrollToSection(event, sectionId);
    });
  });
});
