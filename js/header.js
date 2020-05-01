"use strict"

function dropdown() {
    var nav = document.getElementById("dropdown");
    var close = document.getElementById("navcloser");
    var signout = document.getElementById("signout");
    if (nav.style.height == "20px") {
        nav.style.height = "calc(100% - 30px)";
        nav.style.width = "calc(100% - 30px)";
        close.style.color = "white";
        signout.style.color = "white";
    } else {
        nav.style.height = "20px";
        nav.style.width = "20px";
        close.style.color = "rgba(255, 255, 255, 0)";
        signout.style.color = "rgba(255, 255, 255, 0)";
    }
}

