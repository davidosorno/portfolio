const projects = {
    "qyq": "",
    "arvd": "",
    "pacman": "",
    "pacmm": "",
    "wall": "",
    "admin": ""
}

function initSwiper() {
    // It allows swiper to start working on the slides.
    // https://github.com/nolimits4web/swiper
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        //   },
        // direction: 'vertical',
        coverflowEffect: {
            rotate: 40,
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
        var img = element.wrapperEl.children[element.activeIndex];
        detailsProject(img.id);
    });
    detailsProject('arvd');
}

function detailsProject(nameProject) {
    const imgProject = document.getElementsByClassName('img-project');
    for (let i = 0; i < 4; i++) {
        var imgUrl = `url('../../assets/img/projects/${nameProject}${i + 1}.png')`;
        imgProject[i].style.backgroundImage = imgUrl;
    }
}