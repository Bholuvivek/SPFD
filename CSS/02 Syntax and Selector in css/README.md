# CSS Syntax and Selectors

CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML or XML. This document covers the basic syntax of CSS and various selectors used to target HTML elements for styling.

## CSS Syntax

The basic syntax of CSS consists of a selector followed by a declaration block enclosed in curly braces `{ }`. Each declaration block contains one or more property-value pairs separated by a colon `:`.

```css
selector {
    property1: value1;
    property2: value2;
    
}
```
**Selector:** Specifies the HTML element(s) to style.
**Property:** Defines the aspect of the selected element to style.
**Value:** Specifies the value for the property.
# CSS Selectors
- CSS selectors are patterns used to select the elements you want to style. Here are some common CSS selectors:

**Element Selector:** Selects all instances of a specified element type.

```css

p {
    color: blue;
}
```
**Class Selector:** Selects elements with a specific class attribute.
```css

.my-class {
    font-size: 16px;
}
```
**ID Selector:** Selects a single element with a specific ID attribute.
```css

#my-id {
    background-color: #f0f0f0;
}
```
**Descendant Selector:** Selects an element that is a descendant of another specified element.
```css

div p {
    font-weight: bold;
}
```
**Child Selector:** Selects an element that is a direct child of another specified element.
```css

ul > li {
    list-style-type: circle;
}
```
**Adjacent Sibling Selector:** Selects an element that is immediately preceded by a sibling element.
```css

h2 + p {
    margin-top: 10px;
}
```
**Attribute Selector:** Selects elements with a specific attribute or attribute value.
```css

input[type="text"] {
    border: 1px solid #ccc;
}
```
**Pseudo-classes and Pseudo-elements:** Selects elements based on a state or position.
```css

a:hover {
    text-decoration: underline;
}


p::first-line {
    font-weight: bold;
}
```
# Conclusion
- Feel free to explore the individual folders for each topic to access code examples, explanations, and additional resources. We hope you enjoy your learning journey with MERN!

## Contact Information

For additional support and updates, you can reach me through the following channels:

- **YouTube:** [Vivek Kumar Singh l](https://www.youtube.com/channel/UClhKtACVRfHeYcDiAxngZpQ)
- **Email:** viveksinghpihuli0a@gmail.com
- **GitHub:** [Bholuvivek](https://github.com/Bholuvivek)
- **LinkedIn:** ](https://www.linkedin.com/in/vivekbholu)
- **Instagram:**[vivekbholu] [thevivekbhou](https://www.instagram.com/thevivekbholu)
- **Twitter:** [Bholuvivek](https://twitter.com/Bholuvivek)

Feel free to connect and stay updated on the latest programming content and announcements!Understanding CSS syntax and selectors is crucial for effective styling of web pages. By mastering these concepts, you'll be able to apply styles to HTML elements with precision and control.

For more advanced selectors and styling techniques, refer to the CSS documentation and explore CSS frameworks and preprocessors.
