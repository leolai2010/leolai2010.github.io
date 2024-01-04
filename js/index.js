
$(document).ready(function (){
    animateCSS('#nav_main', 'fadeInDown').then(() => {
        $('.title_text').css('display', 'block').addClass('animate__animated animate__fadeIn');
    });
    // $(window).scroll(function() {
    //     if($(this).scrollTop() >= 1080){
    //         $('#nav_main').removeClass('bg-transparent');
    //         $('#nav_main').addClass('navbar_bg_color');
    //     }
    //     else{
    //         $('#nav_main').removeClass('navbar_bg_color');
    //         $('#nav_main').addClass('bg-transparent');
    //     };
    // });
});

// This is a global function variable to be used to control synchronous animations 
const animateHTML = 'animate__animated animate__';
const animateCSS = (element, animation, prefix = 'animate__') =>
new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
        event.stopPropagation();
        node.classList.remove(`${prefix}animated`, animationName);
        resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});