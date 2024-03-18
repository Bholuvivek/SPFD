# CSS Variables (Custom Properties)

CSS Variables, also known as Custom Properties, allow you to define reusable values in CSS. They provide a way to store and reuse values throughout your CSS code, similar to variables in programming languages.

## Concepts

### Declaration

To declare a CSS variable, use the `--` prefix followed by the variable name:

```css
:root {
  --main-color: #ff0000;
}
```
# Usage
- To use a CSS variable, reference it using the var() function:

```css

h1 {
  color: var(--main-color);
}
```
# Scope
- CSS Variables are scoped to the element where they are declared, but they can also be inherited by child elements:

```css

.container {
  --text-color: #333;
}

.child-element {
  color: var(--text-color); /* Inherits from parent */
}
```
# Dynamic Change
- CSS Variables can be changed dynamically using JavaScript, allowing for theme changes or other dynamic updates without modifying CSS files:

``` javascript

document.documentElement.style.setProperty('--main-color', 'blue');
```
# Example
```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Variables Example</title>
  <style>
    :root {
      --main-color: #ff0000;
    }
    
    h1 {
      color: var(--main-color);
    }
    
    .container {
      --text-color: #333;
    }
    
    .child-element {
      color: var(--text-color);
    }
  </style>
</head>
<body>
  <h1>Hello, CSS Variables!</h1>
  <div class="container">
    <p class="child-element">This paragraph inherits text color from parent.</p>
  </div>
</body>
</html>
```
- In this example, we declare a CSS variable --main-color and use it to define the color of an h1 element. We also demonstrate how CSS variables can be scoped and inherited within HTML elements.