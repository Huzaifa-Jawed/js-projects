// Selection The Whole Box
let question_box = document.querySelectorAll('.box');

// Loop Over Each Box
question_box.forEach(function(box)
{
    
    // selecting Btns in the Question Box
    const btns = box.querySelector(".icons");
    
    btns.addEventListener('click',function () 
    {
        // Checking
        question_box.forEach(function (item) 
        {
            if(item !== box)
            {
                item.classList.remove('show-ans');
            }
        });
        box.classList.toggle("show-ans");
    });
});

















// // Method -2 Treversing The DOM-TREE
// let btns = document.querySelectorAll('.icons');

// btns.forEach(function (btns) {
//     // console.log(btns);

//     btns.addEventListener('click', function (e) {
//         let quest = e.currentTarget.parentElement.parentElement;

//         quest.classList.toggle('show-ans');
//     })
// })
