
let colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f',];

// ----------------------------------------------------

// Selecting background
let body = document.body;
// Selecting Area to Put Color Name 
let color_value = document.querySelector('#color-value');
// Selecting Btn
let btn = document.querySelector('#color-btn');

// ----------------------------------------------------

// ----------------------------------------------------

// ////////////////////////////////////////////////////
// Funtion To Generate Random Colors
// ///////////////////////////////////////////////////
function random_color_generator ()
{

    // adding on Click Event Listner
    btn.addEventListener('click', function()
    {
        let hex = '#';
        // Generating Random Hex Color Values
        for (let i = 0; i < 6; i++) {
            let random_no = Math.floor(Math.random()*colors.length);
            hex += colors[random_no]
        }
        
        

        // Changing BackGround Color
        body.style.backgroundColor = hex;
        // Changing Content 
        color_value.innerHTML = hex;
    })
        
}


random_color_generator();