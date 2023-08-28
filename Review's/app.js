
// Reviews Of Peoples Syored in Arrar Of Objects
const reviews = [
    // First Person
    {
        id : 1,
        img : './huzaifa.jpg',
        name : 'Huzaifa Jawed',
        job_title : 'Developer',
        review : `
Huzaifa is absolutely amazing! His dedication and hard work are truly inspiring. He's a great team player and always willing to lend a helping hand. His positive attitude is infectious and he brings so much energy to any project. Working with him is a pleasure and his contributions are invaluable. 5 stars all the way`,
    },
    // Second Person
    {
        id : 2,
        img : './qasim.jpg',
        name : 'Qasim Ali',
        job_title : 'Engineer',
        review :  `Huzaifa's work is exceptional! His dedication and attention to detail truly shine through. I'm consistently impressed by his creativity and professionalism. Working with him is a pleasure, and the results are always top-notch. Highly recommended!`,
    },
    // Third Person

    {
        id : 3,
        img : './saad.jpg',
        name : 'Saad Abdullah',
        job_title : 'Designer',
        review : `Saad's work is truly exceptional. His attention to detail and creativity shine through in every piece. His ability to evoke emotion and captivate audiences is remarkable. A true artist!`,
    },
    // Fourth Person

    {
        id : 4,
        img : './huzaifa.jpg',
        name : 'Ahmed Chorahi',
        job_title : 'Developer',
        review : `Ahmed exceeded my expectations. His dedication to his work is impressive. He communicates effectively and is a great team player. His problem-solving skills shine through, making him an invaluable asset. I look forward to collaborating with him again.`,
    },
    // Fifth Person

    {
        id : 5,
        img : './falak.jpg',
        name : 'Falak Abbid',
        job_title : 'Electrical Engineer',
        review : `Falak Abbid's work is a captivating journey through intricate emotions and vivid imagery. The artist's ability to blend diverse elements into a harmonious creation is truly impressive. ABBid's unique perspective shines brightly, making their art a must-see for all enthusiasts.`,
    }
]
reviews_length = reviews.length - 1;
// Selecting Elementrs
let author = document.getElementById('author');
let job = document.getElementById('job');
let info = document.getElementById('info');
let person_img = document.getElementById('person-img');

// Selecting Buttons
let prev_btn = document.querySelector('.prev_btn');
let next_btn = document.querySelector('.next_btn');
const newLocal = '.suprise-btn';
let suprise_btn = document.querySelector(newLocal);

// Setting Initial Value For Array
let current_item = 0;


// function to Get Reviews
function get_reviews (value) {
    let person = reviews[value];
    person_img.src = person.img;
    author.textContent = person.name;
    job.textContent = person.job_title;
    info.textContent = person.review;
}


// Defaut Review On Page Load
window.addEventListener('DOMContentLoaded', function () {
    // Function to get reviews
    get_reviews(current_item);
});

next_btn.addEventListener('click', function(e)
{
    
    if(current_item < reviews_length)
    {
        current_item ++;
    }
    
    else
    {
        current_item = 0;
    }
    get_reviews(current_item);
})

prev_btn.addEventListener('click', function()
{
        if(current_item >= reviews_length)
    {
        current_item --;
    }
    
    else
    {
        current_item = 0;
    }
    get_reviews(current_item);
})

suprise_btn.addEventListener('click', function()
{
    current_item = Math.floor(Math.random() * reviews.length);

    get_reviews(current_item);
})


