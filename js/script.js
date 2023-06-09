
//ハンバーガーメニュー
$(function () {
    $(".js-hamburger, .js-drawer").click(function () {
    //toggleClassでclassをつけたり外したりする
    $(".js-hamburger").toggleClass("is-active");
    $(".js-drawer").fadeToggle();
});

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
