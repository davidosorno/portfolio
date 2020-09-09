const projects = {
    0: "aboutme/aboutme",
    1: "projects/qyq",
    2: "projects/regulations",
    3: "projects/arvd",
    4: "projects/pacman",
    5: "projects/pacmm",
    6: "projects/wall",
    // 7: "projects/itlooks",
    // 8: "projects/blog",
    // 9: "projects/growthmonitor",
    // 10: "projects/weather",
}

const descProjects = {
    "arvd": "As you already know I love dogs and coding, so I built a Virtual Pet. An augmented reality pet version that allows you to choose either a dog, a cat or a bird, obviously my pet was a dog. The most important feature is that your pet follows some orders and follows you.  -  I am still working on it as a side project.",

    "qyq": "Enterprise android application to track hundreds of transactions between sellers and customers. Also, It allows you to see the exact location for each seller and the inventory they have. It was built utilizing Android SDk y Java, and SQLite to store information, then it sends data to our API and the information is stored in a MySQL database.",

    "regulations": "",

    "pacman": "",

    "pacmm": "",

    "wall": "",

    "itlooks": "",

    "blog": "",

    "growthmonitor": "",

    "weather": "",
}

// Preload images to enhance the user experience
function preLoadImg() {
    var divImg = document.createElement("div");
    for (var key in projects) {
        for (let i = 0; i < 5; i++) {
            getSrcImage(`${projects[key]}${i}`, divImg);
        }
    }
}

function getSrcImage(imgSrc, divImg) {
    var img = new Image();
    var imgUrl = `assets/img/${imgSrc}.png`;

    // If the image is not .png, change to .jpg
    img.onload = () => {
        divImg.style.backgroundImage = `url('assets/img/${imgSrc}.png')`;   
    }
    img.onerror = () => {
        divImg.style.backgroundImage = `url('assets/img/${imgSrc}.jpg')`;
    }
    // Start trying the url
    img.src = imgUrl;
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
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 6,
            slideShadows: false,
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
    const divsImgProject = document.getElementsByClassName('img-project');
    var description = document.getElementById("descProject");
    description.innerHTML = descProjects[nameProject];
    for (let i = 0; i < 4; i++) {
        getSrcImage(`projects/${nameProject}${i + 1}`, divsImgProject[i]);
    }
}


