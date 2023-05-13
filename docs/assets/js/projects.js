const projects = {
    0: "aboutme/aboutme",
    1: "projects/arvd",
    2: "projects/qyq",
    3: "projects/regulations",
    4: "projects/pacman",
    5: "projects/pacmm",
    6: "projects/wall",
    // 7: "projects/itlooks",
    8: "projects/moviesblog",
    9: "projects/growthmonitor",
    // 10: "projects/enterpriseblog",
    // 11: "projects/tutorelf",
    12: "projects/weather",
}

const descProjects = {
    "arvd": "As you already know I love dogs and coding, so I built a Virtual Pet. An augmented reality pet version made in Unity that allows you to choose either a dog, a cat or a bird, obviously my pet was a dog. The most important feature is that your pet follows some orders and follows you.  -  I am still working on it as a side project.",

    "qyq": "Enterprise android application to track hundreds of transactions between sellers and customers. Also, It allows you to see the exact location for each seller and the inventory they have. It was built utilizing Android SDk y Java, and SQLite to store information, then it sends data to our API and the information is stored in a MySQL database.",

    "regulations": "Desinged CRM software to connect our different departments, from marketing to sales and organize their notes, activities and metrics into one cohesive system. The system also monitor government compliance for health and safety code regulations. I built a desktop version with Java, then I created a mobile version with Android SDK and Java.",

    "pacman": "Pac Man is an old brand game known for most people and I decided to create a different version of the game. It allows you to get coins while hunters try to catch you and sometime you can eat cherries and increase your score. I also change a little bit the hunters utilizing ghost instead, and as they are ghost they can go throuhg the walls. It has a random world every time you start. I made it using HTML, CSS and Javascript.",

    "pacmm": "I decided to challenge myself, so I built a Multiplayer Pac Man. It allows up to four players at the same time and you can see how your friends are doing. Also, You can chat with them in a small text box below the game, see everyones's score and also see who is winning on the right of the screen. For development of multiplayer Pac Man I worked with Node.js' built-in Socket technology that allows direct communication between connected systems.",

    "wall": "The Wall is a website where you can post whatever topic you like and start chatting with other people. Before you start a topic or leave a comment you must register with an unique email. It is a good way to learn about new topics, or share ideas, or make friends or simply have a good reading about something you like. The knowledge should be shared!",

    // "itlooks": "Are you trying to guess how some clothes look? With this application you can combine some clothes to make sure how they look. This app takes images of clothes from different APIs and classifies them to show you three categories that you can combine. It was built utilizing Android SDK, Kotlin and Room.",

    "moviesblog": "Tipically after watch a movie you want to leave a comment, so I created a movie blog in order to people write down comments and rate them. After registered, you will be redirected to the main stage to start commenting your favorite movies. It was built utilizing Angular7, and Node.js and the information is stored in a MongoDB database.",

    "growthmonitor": " This app was made to monitor the growth of the school age children and adolescents. It was made for Nutritionists and Pediatricians to keep records for the patients. I developed utilizing Android SDK, Kotlin and Room. I also integrated a Google Drive API to make backups.",

    // "enterpriseblog": "Enterprise Blog",
    
    // "tutorelf": "App made to help students learning and studying over 5 subjects. The app is still in development procces ",

    "weather": "App to check the city's wheather, and also add more cities to it. It was a good way to practice the whole proccess about creating a full lifecycle application. I worked with an OpenWeather API to get data and store them with a Room feature that allows me to give the user the best experience.",

}

// Preload images to enhance the user experience
function preLoadImg() {
    var arrImg = new Array();
    var count = 0;
    for (var key in projects) {
        for (let i = 0; i < 5; i++) {
            arrImg.push(document.createElement("div"));
            getSrcImage(`${projects[key]}${i}`, arrImg[i*count]);
            count += 1;
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
    detailsProject('arvd');
}

function detailsProject(nameProject) {
    const divsImgProject = document.getElementsByClassName('img-project');
    var description = document.getElementById("descProject");
    description.innerHTML = descProjects[nameProject];
    for (let i = 0; i < 4; i++) {
        getSrcImage(`projects/${nameProject}${i + 1}`, divsImgProject[i]);
    }
}


