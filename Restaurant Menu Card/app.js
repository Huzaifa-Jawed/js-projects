const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
        {
        id: 10,
        title: "Stake",
        category: "dinner",
        price: 20.99,
        img: "./images/item-10.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 11,
        title: "Cold Cofee",
        category: "tea",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
];


//  Selecting Elements

let menu_section = document.querySelector('.sec-center');
let btn_container = document.querySelector('.btn-container');



// !=====================================================! //
// !----         Show Content When page Lodes       ----! //
// !===================================================! //
window.addEventListener('DOMContentLoaded',function () {
    createMenu(menu);
    createButtons();
});



// !==========================================! //
// !----     Function to Creat Buttons   ----! //
// !========================================! //
function createButtons () {

    // !----    Getting Unique Categerios From Array   ----! //

    let Unique_categories = menu.reduce(function (values , items) 
    {
        if(!values.includes(items.category))
        {
            values.push(items.category);
        }
        return values;
        
    },["all"]);

    // !----     Creating Buttons     ----! //

    let menu_categories = Unique_categories.map(function (item)
    {
        return( `<button class="btn" data-id="${item}">${item}</button>`);
    }).join('');
    btn_container.innerHTML = menu_categories;

    // !----    Selecting Buttons   ----! //
    let btns = document.querySelectorAll('.btn');
    // !----    When User Click On Buttons   ----! //

    btns.forEach(function (button) 
    {
        console.log(btns);
        // Adding EventListner For Each Button
        
        button.addEventListener('click',function (event) 
        {
            let category= event.target.dataset.id;
            
            // todo Filtering Array to get Specific Elements
            
            let filtered_arr = menu.filter(function (items) 
            {
                if(items.category === category)
                {
                    return items;
                }
            });
            
            if(category === 'all')
            {
                createMenu(menu);
                
            }
            else
            {
                createMenu(filtered_arr);
            }
        
        });
        
    });

}


// !======================================================! //
// !----             Creating Menu Function          ----! //
// !====================================================! //
function createMenu(menu_list) {
    let menu_items = menu_list.map(function (item)
    {
        return( `<div class="menu-items">
                    
                        <!-- Image Of Item -->
                        <div class="image">
                            <img src="${item.img}" alt="Image">
                        </div>
                        
                        <!-- Description Of Item -->
                        <div class="item-info">
                        
                            <!-- Header -->
                            <div class="item-header">
                            
                                <!-- Item's Name -->
                                <h4 class="item-name">${item.title}</h4>
                                <!-- item's Price -->
                                <h4 class="item-price">$ ${item.price}</h4>
                            </div>
                            
                            <!-- Description -->
                            <div class="item-description">
                                <p>${item.desc}</p>
                            </div>
                        
                    </div>
                </div>`);
    });
    menu_items = menu_items.join("");
    menu_section.innerHTML = menu_items;
}











