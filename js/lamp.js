var bodi = document.getElementById("bodi");
var background = ["black", "white"];
var color = 0;
var lampBroken = false;  //control switch on and switch off when lamp is broken
var lamp = document.getElementById("lamp");
var switcher = document.getElementById("switcher");

function lampInteraction(status) {
    if (!lampBroken) {
        if (status == "light") {
            lamp.src = "images/lamp-light.png";
            switcher.src = "images/switcher-on.png";
            color = 1;
        }
        if (status == "dark") {
            lamp.src = "images/lamp-dark.png";
            switcher.src = "images/switcher-off.png";
            color = 0;
        }
        if (status == "broken") {
            lamp.src = "images/lamp-broken.png";
            color = 0;
            lampBroken = true;
        }
    } else {
        if (status == "light") {
            switcher.src = "images/switcher-on.png";
            alert("Can't switch on! Lamp is broken!");
        }
        if (status == "dark") {
            switcher.src = "images/switcher-off.png";
        }
    }
    bodi.style.backgroundColor = background[color];
}

