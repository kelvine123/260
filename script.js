// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Toggle the navigation menu
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
  
    hamburger.addEventListener("click", () => {
      // Toggle the 'active' class for the hamburger and navigation menu
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  
    // Handle dropdown menu functionality
    const dropdown = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");
  
    dropdown.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link behavior
      dropdownMenu.classList.toggle("visible"); // Show or hide the dropdown menu
    });
  
    // Hide dropdown menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove("visible");
      }
    });
  
    // Toggle 'Show balance' button
    const showBalanceButton = document.querySelector(".show-balance");
    let isBalanceVisible = false;
  
    showBalanceButton.addEventListener("click", () => {
      if (isBalanceVisible) {
        showBalanceButton.textContent = "Show balance";
        isBalanceVisible = false;
      } else {
        showBalanceButton.textContent = "Balance: $1,000"; // Replace with actual balance value
        isBalanceVisible = true;
      }
    });
  
    // Simulate more options (ellipsis functionality)
    const moreOptions = document.querySelector(".more-options");
    moreOptions.addEventListener("click", () => {
      alert("More options coming soon!");
    });
  });
  document.getElementById("contact-form").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent the default form submission

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    try {
        const response = await fetch("http://localhost:3000/send-contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the message.");
    }
});
