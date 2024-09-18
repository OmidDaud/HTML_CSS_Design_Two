// Function to scroll to a specific section on the page
function scrollToSection(event, sectionId) {
  // Prevents the default behavior of the <a> tag (e.g., jumping to an anchor)
  event.preventDefault();

  // Finds the section with the given ID
  var section = document.getElementById(sectionId);

  // Checks if the section was found
  if (section) {
    // Smoothly scrolls to the found section
    section.scrollIntoView({ behavior: "smooth" });

    // Close the menu after scrolling
    closeMenu();
  } else {
    // Logs an error message in the console if the section is not found
    console.error("Section with ID " + sectionId + " not found.");
  }
}

// Function to close the menu
function closeMenu() {
  const menu = document.querySelector(".menu");
  if (menu.classList.contains("active-menu")) {
    menu.classList.remove("active-menu"); // Removes the 'activated' class to close the menu
  }
}

// Waits for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Selects the toggle menu and the menu itself from the DOM
  const toggleMenu = document.querySelector(".toggle-menu");

  // Adds a click event listener to the toggle menu
  toggleMenu.addEventListener("click", function () {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("active-menu"); // Toggles the "activated" class of the menu
  });

  // Selects all section links and adds an event listener for scrolling
  const sectionLinks = document.querySelectorAll('a[href^="#"]');
  sectionLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      const sectionId = this.getAttribute("href").substring(1); // Get the section ID from the href attribute
      scrollToSection(event, sectionId); // Call the scrollToSection function
    });
  });
});
