
// Selecting Button
const btn = document.querySelector('.btn');
const video = document.querySelector('.video-container')
const preloader = document.querySelector('.preloader')

// Adding Play Pause Funcationality to Button
btn.addEventListener('click' , function () 
{
  if (btn.classList.contains('slide')) 
  {
    btn.classList.remove('slide');
    video.pause();
  }
  else  
  {
    btn.classList.add('slide');
    video.play();
  }

})
