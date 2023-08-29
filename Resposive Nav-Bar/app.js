// Selecting Elements

let nav_icon = document.getElementById('mob-icon');
let nav = document.getElementById('nav-links');


nav_icon.addEventListener('click', function()
{
    nav.classList.toggle('mob-links');
    console.log('fuck');
});