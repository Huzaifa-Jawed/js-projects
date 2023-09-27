// ************ Getting Element's ************
const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.links-container');
const navLinks =  document.querySelector('.nav-links');

const navBar = document.querySelector('header');
const banner = document.querySelector('.banner');
const topLink = document.querySelector(".top-link")


// ********** Set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ************ Click Event For Nav-Bar ************
navToggle.addEventListener('click',function () 
{

    let linkHeight = navLinks.getBoundingClientRect().height;
    let containerHeight = linkContainer.getBoundingClientRect().height;
    
    if(containerHeight === 0)
    {
        // 32 is added because of 2rem of margin top applied to Nav-Links
        linkContainer.style.height = `${linkHeight + 32}px`;
    }
    else{
        linkContainer.style.height = "0px";
        
    }
});

// ************ Fix Nav-Bar ************
window.addEventListener('scroll', function () 
{
    // Nav-Bar Fixed
    let scrollHeight = window.pageYOffset; 
    let navHeight = navBar.getBoundingClientRect().height;
    if(scrollHeight > navHeight)
    {
        navBar.classList.add('fixed');
    }
    else(
        navBar.classList.remove('fixed')
    )

    // Close Link's in Mobile-View when WINDOW Is Scrolled
    linkContainer.style.height=0;


    
    // Back to TOP-Link
    let bodyHalf = document.body.getBoundingClientRect().height / 2;

    if(scrollHeight > bodyHalf)
    {
        topLink.classList.add('show-link');
    }
    else(
        topLink.classList.remove('show-link')
    )

});

// ********** Smooth scroll ************
// selecting links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => 
{
    link.addEventListener("click", (e) => 
    {
        // prevent default
        e.preventDefault();
        // navigate to specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linkContainer.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains("fixed-nav");
        let position = element.offsetTop;


        if (!fixedNav) 
        {
        position = position - navHeight;
        }
        if (navHeight > 82) 
        {
        position = position + containerHeight;
        }


        window.scrollTo({
        left: 0,
        top: position,
        });
        // close
        linkContainer.style.height = 0;
    });
});


