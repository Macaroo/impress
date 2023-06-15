
//ハンバーガーメニュー
$(function () {
    $(".js-hamburger, .js-drawer").click(function () {
    //toggleClassでclassをつけたり外したりする
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
});

//スライダー
var swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// gsap
window.addEventListener('load',function(){
    const openingTL = gsap.timeline();
    openingTL
    .to('.top-service__circle',{scale:1,duration:1.5})
    .to('.top-recruit__circle',{scale:1,duration:1.5})
});

document.addEventListener('DOMContentLoaded',function(){
    gsap.to('.top-service__text',{clipPath:'inset(100% 0 0 0)',ease:'none',scrollTrigger:{
        trigger:'.top-service__text',
        start:'bottom 50px',
        end:'top 50px',
        scrub:true,
    }});
});

document.addEventListener('DOMContentLoaded',function(){
    gsap.to('.top-service__sub-image',{clipPath:'inset(100% 0 0 0)',ease:'none',scrollTrigger:{
        trigger:'.top-service__sub-image',
        start:'bottom 50px',
        end:'top 50px',
        scrub:true,
    }});
});

gsap.to(".allow-down", {
    y: 30,
    repeat: -1,
    duration:1.1
});

gsap.to(".allow-right img", {
    x: 30,
    repeat: -1,
    duration:1.1
});

gsap.to(".allow-black img", {
    x: 30,
    repeat: -1,
    duration:1.1
})

});
