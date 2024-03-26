
const sidebar = document.getElementsByClassName("sidebar")
const sidebarGet = document.getElementById("sidebar-get-symbol")
function sidebarFinalPos() {
    sidebarGet.style.transform = "rotate(180deg)"
}
function sidebarFirstPos() {
    sidebarGet.style.transform = "rotate(0deg)"
}

function scrollToId(id){
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
}





const name = document.getElementById("name-2");

const picture = document.getElementById("picture");
function picFinalPos() {
    picture.style.left = "-140px"
    
    name.style.left = "-290px"
}
function picFirstPos() {
    name.style.left = "0px"
    picture.style.left = "0px"
}
const langs = document.getElementById("languages");
function langFinalPos() {
    langs.style.top = "-100px"
}
function langFirstPos() {
    langs.style.top = "0px"
}
