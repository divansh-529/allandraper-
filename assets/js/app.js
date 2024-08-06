const navmenu = () => {
    document.getElementById("rotate").classList.toggle("rotate")
    document.getElementById("rotate-1").classList.toggle("rotate-1")
    document.getElementById("line-2").classList.toggle("bg-transparent")
    document.getElementById("show-nav").classList.toggle("show-nav-bar")

}
let mybutton = document.getElementById("back-to-top");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}