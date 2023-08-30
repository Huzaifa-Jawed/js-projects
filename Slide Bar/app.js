// Selecting Elements

let nav_icon = document.getElementById('nav-icon');
let nav_items = document.getElementById('nav-items');

nav_icon.addEventListener('click' , function () {
    nav_items.classList.toggle('show-nav-items');
});

