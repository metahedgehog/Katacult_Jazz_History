var prevScrollpos = window.pageYOffset;
var navigation = document.getElementById('navigation');
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navigation.style.top = "0";
    } else {
        navigation.style.top = "-10rem";
    }
    prevScrollpos = currentScrollPos;
}