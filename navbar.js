// Fetch and inject the navbar, then make the menu button work
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    const menuButton = document.getElementById("menuButton");
    const menuContent = document.getElementById("menuContent");

    if (menuButton && menuContent) {
      menuButton.addEventListener("click", function(event) {
        event.stopPropagation();
        menuContent.classList.toggle("show");
      });

      document.addEventListener("click", function(event) {
        if (!event.target.closest(".dropdown")) {
          menuContent.classList.remove("show");
        }
      });
    } else {
      console.warn("Menu button or menu content not found in navbar");
    }
  })
  .catch(error => {
    console.error("Failed to load navbar:", error);
  });
