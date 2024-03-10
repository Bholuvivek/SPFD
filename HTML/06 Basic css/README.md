# CSS Basics

## Introduction to Cascading Style Sheets (CSS)

Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in HTML or XML. It enables web developers to control the appearance of web pages, including layout, colors, fonts, and more.

## Inline, Internal, and External CSS

### Inline CSS
Inline CSS is applied directly to an HTML element using the `style` attribute. It affects only the specific element to which it is applied.

Example:
```html
<p style="color: red; font-size: 18px;">This is a paragraph with inline CSS.</p>
```
# Internal CSS
- Internal CSS is defined within the <style> element in the <head> section of an HTML document. It applies styles to multiple elements within the same HTML file.

```bash
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Internal CSS Example</title>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
<body>
    <p>This is a paragraph with internal CSS.</p>
</body>
</html>

```
# External CSS
- External CSS is defined in a separate CSS file and linked to the HTML document using the <link> element. It allows for the separation of content and presentation, making it easier to manage styles across multiple pages.

# Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>External CSS Example</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>This is a paragraph with external CSS.</p>
</body>
</html>

```

# CSS Syntax and Selectors
## CSS Syntax
- CSS consists of a selector and a declaration block. The selector specifies which elements the styles should apply to, and the declaration block contains one or more declarations separated by semicolons.

# Example:

```css
/* Element Selector */
p {
    color: blue;
}

/* Class Selector */
.my-class {
    font-size: 18px;
}

/* ID Selector */
#my-id {
    background-color: yellow;
}

/* Attribute Selector */
a[href="https://www.example.com"] {
    text-decoration: none;
}

/* Pseudo-selector */
p:first-child {
    font-weight: bold;
}

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