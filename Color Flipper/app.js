let colors = ['red', 'green', 'blue','yellow','white'];

// Selecting background
let body = document.body;
// Selecting Area to Put Color Name 
let color_value = document.querySelector('#color-value');
// Selecting Btn
let btn = document.querySelector('#color-btn');


// Funtion To Generate Random Colors
function random_color_generator ()
{
    // adding on Click Event Listner
    btn.addEventListener('click', function()
    {
        console.log('he');
         // Generating Random No,s
        let random_no = Math.floor(Math.random()*colors.length);

        // Changing BackGround Color
        body.style.backgroundColor = colors[random_no];
        // Changing Content 
        color_value.innerHTML = colors[random_no];
    })
        
}


random_color_generator();