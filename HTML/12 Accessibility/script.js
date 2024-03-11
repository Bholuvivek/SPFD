document.getElementById("accessibilityForm").addEventListener("submit", function(event) {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var messageInput = document.getElementById("message");

    if (!nameInput.checkValidity()) {
        nameInput.setCustomValidity("Please enter your name.");
        event.preventDefault(); // Prevent form submission
    }

    if (!emailInput.checkValidity()) {
        emailInput.setCustomValidity("Please enter a valid email address.");
        event.preventDefault(); // Prevent form submission
    }

    if (!messageInput.checkValidity()) {
        messageInput.setCustomValidity("Please enter your message.");
        event.preventDefault(); // Prevent form submission
    }
});
