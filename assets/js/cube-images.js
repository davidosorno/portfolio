// Load Images for cubics

const hobbies = {
    0: "hiking",
    1: "coding",
    2: "bikes",
    3: "games"
};

function loadCubeImages() {

    var divContainer = document.getElementById("container");
    for (let i = 0; i < 4; i++) {
        var divHobbie = document.createElement("div");
        var className = "container-" + hobbies[i];
        divHobbie.className = className;
        for (let j = 0; j < 6; j++) {
            var divPictureHobbie = document.createElement("div");
            divPictureHobbie.className = "picture-cube";
            var nameImg = "url(assets/img/aboutme/aboutme" + j + ".jpg)";
            divPictureHobbie.style.backgroundImage = nameImg;
            divPictureHobbie.style.backgroundColor = "gray";
            divHobbie.appendChild(divPictureHobbie);
        }
        divContainer.appendChild(divHobbie);
    }
}