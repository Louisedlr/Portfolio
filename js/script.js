gsap.registerPlugin(ScrollTrigger);

gsap.from('.text-info', {opacity:0, duration:1, ease: "power4.out" ,delay:2});
gsap.from('.photo-name', {opacity:0, duration:1, ease: "power4.out" ,delay:1});
gsap.from('.name-info', {x:200, duration:1, ease: "power4.out" ,delay:1});


let menu = document.querySelector('.menu-wrap');

menu.addEventListener('click', function() {
    document.querySelector(".menu-open").classList.toggle("menu-active");
    gsap.from('.menu-open h3', {opacity:0, delay:0.7, yPercent:-20, duration:0.9, ease: "power4.out", stagger:0.2});
    
})


// var tl_sommaire = gsap.timeline({});
// tl_sommaire.from(".titre-sommaire", {opacity:0,x:-200, duration:1});
// tl_sommaire.from(".images-sommaire", { opacity:0, duration:0.5});
        
//         ScrollTrigger.create({
//             trigger: "#sommaire",
//             start: "center center",
//             pin: true,
//             scrub: true,
//             animation: tl_sommaire
//         });


        var tl_3D = gsap.timeline({});
        tl_3D.from(".title-projet-3D", {opacity:0,x:-200, duration:0.5});
        // tl_3D.from(".images-sommaire", { opacity:0, duration:0.5});
        
        ScrollTrigger.create({
            trigger: "#page-3D",
            start: "center center",
            pin: true,
            scrub: true,
            animation: tl_3D
        });

        var tl_prog = gsap.timeline({});
        tl_prog.from(".title-projet-programmation", {opacity:0,x:-200, duration:0.5});
        // tl_3D.from(".images-sommaire", { opacity:0, duration:0.5});
        
        ScrollTrigger.create({
            trigger: "#page-prog",
            start: "center center",
            pin: true,
            scrub: true,
            animation: tl_prog
        });