const projects = {
    0: "qyq",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: ""
}

function initSwiper() {
    // It allows swiper to start working on the slides.
    // https://github.com/nolimits4web/swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });
    swiper.on('transitionEnd', function (element) {
        changeProject(element.activeIndex);
    });
}

function changeProject(numProject) {
    // alert(`NumProject ${numProject}`)
}