## CSS Media Queries
- CSS Media Queries allow you to apply different styles to a document based on various factors such as screen size, device orientation, and resolution. They are essential for creating responsive web designs that adapt to different viewing environments.

## Concepts:
# 1. Syntax:
- Media queries use the @media rule followed by a media type and one or more expressions, which specify the conditions under which the styles should be applied.

```css

@media media_type and (media_feature) {
  /* CSS rules to apply */
}
```
# 2. Media Types:
- Media types specify the type of media the styles apply to. Common media types include all, screen, print, speech, etc.

```css

@media screen {
  /* Styles for screen media */
}
```
# 3. Media Features:
- Media features allow you to target specific characteristics of the user's device, such as width, height, orientation, and resolution.

```css

@media (max-width: 600px) {
  /* Styles for screens narrower than 600px */
}
4. Logical Operators:
You can use logical operators like and, not, and only to combine multiple media features.

```css

@media (min-width: 768px) and (max-width: 1024px) {
  /* Styles for screens between 768px and 1024px wide */
}
```
## Examples:
# 1. Responsive Layout:
- Adjusting layout based on screen size:

```css

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  .item {
    width: 100%;
  }
}
```
# 2. Hiding/Showing Elements:
- Showing/hiding elements based on device orientation:

```css

@media (orientation: landscape) {
  .landscape-only {
    display: block;
  }
  .portrait-only {
    display: none;
  }
}
```
# 3. High-Resolution Images:
- Loading high-resolution images for high-density screens:

```css

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  .logo {
    background-image: url('logo@2x.png');
  }
}```