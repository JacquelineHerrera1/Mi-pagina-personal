// script.js
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header h1");
    header.style.opacity = 0;

    setTimeout(function() {
        header.style.opacity = 1;
        header.style.transition = "opacity 1s";
    }, 500);

    // También puedes agregar más interactividad y funcionalidades con JavaScript según tus necesidades.
});
