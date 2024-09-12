const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

function openTab(event, tabIndex) {
  tabs.forEach(tab => tab.classList.remove("active"));
  tabContents.forEach(content => content.classList.remove("active"));

  event.currentTarget.classList.add("active");
  document.getElementById(`tab-${tabIndex}`).classList.add("active");
}

tabs.forEach(tab => {
  tab.addEventListener("click", function(e) {
    const tabIndex = this.getAttribute("data-tab");
    openTab(e, tabIndex);
  });
});
