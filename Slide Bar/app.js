// Selecting Elements

let nav_icon = document.getElementById('nav-icon');
let nav_items = document.getElementById('nav-items');
let cross_icon = document.getElementById('cross-icon');

nav_icon.addEventListener('click' , function () {
    nav_items.classList.toggle('show-nav-items');
});

// When User Click on Cross-icon Hide Slide-Bar
cross_icon.addEventListener('click', function()
{
    nav_items.classList.remove('show-nav-items')
});

