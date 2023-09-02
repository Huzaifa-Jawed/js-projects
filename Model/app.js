// Selecting Elements
let show_btn = document.querySelector(".open-btn");
let close_btn = document.querySelector('.close-btn');
let mode_container = document.querySelector('.model-container');

show_btn.addEventListener('click', function () {
    mode_container.classList.add('show-container')
});

close_btn.addEventListener('click', function () {
    mode_container.classList.remove('show-container')
});