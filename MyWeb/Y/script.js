TweenMax.from(".main-text", 1, {
    y: 1000,
    ease: Circ.easeOut
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#card2", {
    scrollTrigger: "#card1",
    x: -300,
    duration: 1
});

gsap.from("#card3", {
    scrollTrigger: "#card1",
    x: -500,
    duration: 1
});

gsap.from("#card4", {
    scrollTrigger: "#card1",
    x: -700,
    duration: 1
});


gsap.from("#dis_gsap", {
    scrollTrigger: "#dis_gsap",
    x: 400,
    duration: 1
});



gsap.from(".img-thumbnail", {
    scrollTrigger: ".img-thumbnail",
    y: 300,
    duration: 1
});

gsap.from("#form", {
    scrollTrigger: "#form",
    x: -800,
    duration: 1
});

gsap.from(".footer", {
    scrollTrigger: ".footer",
    y: 100,
    duration: 1
});

// gsap.from(".img-thumbnail",{
//     scrollTrigger:".img-thumbnail",
//     x:500,
//     duration:2
// });

// gsap.from(".img-thumbnail",{
//     scrollTrigger:".img-thumbnail",
//     x:700,
//     duration:2
// });


// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

