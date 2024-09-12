// Select all tab buttons and content sections
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

// Function to handle tab switching
function openTab(event, tabIndex) {
  // Remove the "active" class from all tabs and content
  tabs.forEach(tab => tab.classList.remove("active"));
  tabContents.forEach(content => content.classList.remove("active"));

  // Add the "active" class to the clicked tab and the corresponding content
  event.currentTarget.classList.add("active");
  document.getElementById(`tab-${tabIndex}`).classList.add("active");
}

// Add event listeners to each tab
tabs.forEach(tab => {
  tab.addEventListener("click", function(e) {
    const tabIndex = this.getAttribute("data-tab"); // Get the associated tab content ID
    openTab(e, tabIndex);
  });
});
