document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");

    // Show modal when the page loads
    modal.style.display = "none";

    // Open modal when clicking the button
    openModalBtn.addEventListener("click", function() {
        modal.style.display = "block";
    });

    // Close modal when clicking the close button
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

