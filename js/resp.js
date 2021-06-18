burger= document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navList=document.querySelector('.nav-list')
rightNav=document.querySelector('.rightnav')
lines=document.querySelectorAll('.line')


 
burger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    lines[0].classList.toggle('lineMotion');
    // lines[1].classList.toggle('lineMotion');
    // lines[2].classList.toggle('lineMotion');
    
    // lines.toggle('line-animation');
    // lines.toggle('line-animation');
    
})