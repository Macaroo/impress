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

});
