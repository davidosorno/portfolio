const projects = {
    0: "aboutme/aboutme",
    1: "projects/qyq",
    2: "projects/regulations",
    3: "projects/arvd",
    4: "projects/pacman",
    5: "projects/pacmm",
    6: "projects/wall"
}

const descProjects = {
    "arvd": "As you already know I love dogs and coding, so I built a Virtual Pet. Obviously my pet was a dog, but you can choose cat or bird as well. The most important feature is your pet follows some orders and follows you.",

    "qyq": "Enterprise android application to track hundreds of transactions between sellers and customers. Moreover, It allows you to see the exact location for each seller and the inventory they have. It was built utilizing Android SDk y Java, and keeps records locally with SQLite and sends data to MySQL API, that we created.",

    "regulations": "",

    "pacman": "",

    "pacmm": "",

    "wall": ""
}

function preLoadImg() {
    var imagesLoaded = new Array();
    for (var key in projects) {
        for (let i = 0; i < 5; i++) {
            let img = new Image();
            let srcImage = `assets/img/${projects[key]}${i}`;
            img.onload = () => srcImage + ".png";
            img.onerror = () => srcImage + ".jpg";
            img.src = srcImage + ".png";
            imagesLoaded.push(img);
        }
    }
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
    detailsProject('qyq');
}

function detailsProject(nameProject) {
    const imgProject = document.getElementsByClassName('img-project');
    var description = document.getElementById("descProject");
    description.innerHTML = descProjects[nameProject];
    for (let i = 0; i < 4; i++) {
        var imgUrl = `url('assets/img/projects/${nameProject}${i + 1}.png')`;
        imgProject[i].style.backgroundImage = imgUrl;
    }
}