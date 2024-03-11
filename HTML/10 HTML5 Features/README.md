# HTML5 Features

HTML5 introduced several new features and enhancements to make web development more efficient and user-friendly. This document covers some of the prominent HTML5 features along with examples.

## New Semantic Elements

HTML5 introduced semantic elements that provide more meaningful structure to web documents:

- `<article>`: Represents an independent piece of content.
- `<aside>`: Represents content that is tangentially related to the content around it.
- `<figure>`: Represents self-contained content, such as images, videos, diagrams, etc.

```html
<article>
    <h1>Article Title</h1>
    <p>This is the content of the article.</p>
</article>

<aside>
    <h2>Related Links</h2>
    <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
    </ul>
</aside>

<figure>
    <img src="image.jpg" alt="Image">
    <figcaption>Caption for the image</figcaption>
</figure>
```
# Geolocation API
- HTML5 introduced the Geolocation API, which allows obtaining the user's geographical location:

#Javascript

```javascript
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    console.log("Geolocation is not supported by this browser.");
}

function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude);
    console.log("Longitude: " + position.coords.longitude);
}
```
# Web Storage
- HTML5 introduced Web Storage, which allows storing data locally on the user's browser:

**localStorage:** Stores data with no expiration date.
**sessionStorage:** Stores data for one session (data is lost when the browser tab is closed).

```javascript
// Storing data in localStorage
localStorage.setItem("username", "John");

// Retrieving data from localStorage
var username = localStorage.getItem("username");
console.log("Username: " + username);

// Storing data in sessionStorage
sessionStorage.setItem("theme", "dark");

// Retrieving data from sessionStorage
var theme = sessionStorage.getItem("theme");
console.log("Theme: " + theme);
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
