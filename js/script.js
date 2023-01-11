gsap.registerPlugin(ScrollTrigger);

gsap.from('.text-info', {opacity:0, duration:1, ease: "power4.out" ,delay:2});
gsap.from('.photo-name', {opacity:0, duration:1, ease: "power4.out" ,delay:1});
gsap.from('.name-info', {x:200, duration:1, ease: "power4.out" ,delay:1});


let menu = document.querySelector('.menu-wrap');

menu.addEventListener('click', function() {
    document.querySelector(".menu-open").classList.toggle("menu-active");
    gsap.from('.menu-open h3', {opacity:0, delay:0.7, yPercent:-20, duration:0.9, ease: "power4.out", stagger:0.2});
    
})