document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".faq_toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function () {
      // Close other accordions when opening a new one
      if (!this.classList.contains("open")) {
        document.querySelectorAll(".faq_toggle.open").forEach(openToggle => {
          openToggle.click();
        });
      }

      // Save the sibling of the toggle we clicked on
      const sibling = this.nextElementSibling; // Assuming the structure is <toggle> <content>
      const animationDuration = 400;

      if (this.classList.contains("open")) {
        // Close the content div if already open
        sibling.style.transition = `height ${animationDuration}ms`;
        sibling.style.height = "0px";
      } else {
        // Open the content div if already closed
        sibling.style.height = "auto"; // Set to auto to get the height
        const autoHeight = sibling.offsetHeight; // Get the full height
        sibling.style.height = "0px"; // Set to 0 for animation

        // Trigger the transition after a small timeout
        setTimeout(() => {
          sibling.style.transition = `height ${animationDuration}ms`;
          sibling.style.height = `${autoHeight}px`;
        }, 10); // Small timeout to ensure the height is set before animating

        // Reset height to auto after the animation ends
        sibling.addEventListener('transitionend', function() {
          sibling.style.height = "auto"; // Set to auto to maintain the final state
        }, { once: true }); // Ensure this runs only once
      }

      // Open and close the toggle div
      this.classList.toggle("open");
    });
  });
});
