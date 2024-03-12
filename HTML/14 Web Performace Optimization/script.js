// Lazy loading images
document.addEventListener("DOMContentLoaded", function() {
    var lazyImages = document.querySelectorAll('img[data-src]');
    
    lazyImages.forEach(function(img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });
});
