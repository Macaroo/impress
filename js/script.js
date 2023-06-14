
//ハンバーガーメニュー
$(function () {
    $(".js-hamburger, .js-drawer").click(function () {
    //toggleClassでclassをつけたり外したりする
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
});

//スライダー
const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    loop: true,
    autoplay: {
        delay: 5000,
    },
    speed: 1000,

    pagination: {
        el: '.swiper-pagination',
    },
});

// gsap
window.addEventListener('load',function(){
    const openingTL = gsap.timeline();
    openingTL
    .to('.top-service__circle',{scale:1,duration:1.5})
    .to('.top-recruit__circle',{scale:1,duration:1.5})
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
