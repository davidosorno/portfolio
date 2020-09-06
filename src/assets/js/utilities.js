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
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        //   },
        //   direction: 'vertical',
        coverflowEffect: {
            rotate: 70,
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
}

function detailsProject(nameProject) {
    // img-project
    // logo-tech
    const imgProject = document.getElementsByClassName('img-project');
    for (let i = 0; i < 4; i++) {
        var imgUrl = `url('../../assets/img/projects/${nameProject}${i + 1}`;
        var tester = new Image();
        try {
            tester.onload = function () { // when .png ok
                imgProject[i].style.backgroundImage = imgUrl + ".png')";
            };
            tester.onerror = function () { // when .png failed
                imgProject[i].style.backgroundImage = imgUrl + ".jpg')";
            };
        } catch (err) {
            continue;
        }
        tester.src = imgUrl + '.png'; // execute the test
    }
}