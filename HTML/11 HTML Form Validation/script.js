document.getElementById("customForm").addEventListener("submit", function(event) {
    var ageInput = document.getElementById("age");
    var ageError = document.getElementById("ageError");
    var ageValue = parseInt(ageInput.value);

    if (isNaN(ageValue) || ageValue < 18) {
        ageError.textContent = "Age must be a number and at least 18.";
        event.preventDefault(); // Prevent form submission
    } else {
        ageError.textContent = ""; // Clear error message
    }
});
