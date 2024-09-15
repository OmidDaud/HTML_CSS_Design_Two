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
  } else {
    // Logs an error message in the console if the section is not found
    console.error("Section with ID " + sectionId + " not found.");
  }
}

// Waits for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Selects the toggle menu and the menu itself from the DOM
  const toggleMenu = document.querySelector(".toggle-menu");
  const menu = document.querySelector(".menu");

  // Adds a click event listener to the toggle menu
  toggleMenu.addEventListener("click", function () {
    // Toggles the "activated" class of the menu (adds or removes it)
    menu.classList.toggle("activated");
  });
});
