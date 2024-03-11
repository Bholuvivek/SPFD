# HTML Forms and Validation

HTML forms are used to collect user input on web pages. HTML5 introduced new form validation attributes and APIs, making it easier to validate user input both client-side and server-side.

## HTML5 Form Validation Attributes

HTML5 introduced several attributes for form elements to perform client-side validation:

- **required**: Specifies that an input field must be filled out before submitting the form.
- **pattern**: Specifies a regular expression pattern that the input element's value is checked against.
- **min** and **max**: Specifies the minimum and maximum values for an input element.
- **minlength** and **maxlength**: Specifies the minimum and maximum length for an input element's value.
- **type**: Specifies the type of input field (e.g., email, number, date) and provides built-in validation for certain types.

Example:
```html
<form>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <button type="submit">Submit</button>
</form>
```

# Custom Form Validation using JavaScript
- JavaScript can be used to provide custom form validation logic beyond what HTML5 attributes offer. This allows for more complex validation rules and dynamic feedback to users.

# Example:

```html
<form id="myForm">
    <label for="age">Age:</label>
    <input type="number" id="age" name="age">
    <span id="ageError" style="color: red;"></span>
    <button type="submit">Submit</button>
</form>

<script>
    document.getElementById("myForm").addEventListener("submit", function(event) {
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
</script>
```

Feel free to explore the individual folders for each topic to access code examples, explanations, and additional resources. We hope you enjoy your learning journey with MERN!

## Contact Information

For additional support and updates, you can reach me through the following channels:

- **YouTube:** [Vivek Kumar Singh l](https://www.youtube.com/channel/UClhKtACVRfHeYcDiAxngZpQ)
- **Email:** viveksinghpihuli0a@gmail.com
- **GitHub:** [Bholuvivek](https://github.com/Bholuvivek)
- **LinkedIn:** ](https://www.linkedin.com/in/vivekbholu)
- **Instagram:**[vivekbholu] [thevivekbhou](https://www.instagram.com/thevivekbholu)
- **Twitter:** [Bholuvivek](https://twitter.com/Bholuvivek)

Feel free to connect and stay updated on the latest programming content and announcements!