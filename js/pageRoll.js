const mainPage = document.querySelector('.main-page');
let isRoll = true, pages = 0;

document.addEventListener('mousewheel', (ev) => {
    var ev = window.event || ev;

    if(isRoll) {
        isRoll = false;
        mainPage.style.transition = "0.5s linear";

        if(ev.wheelDelta < 0 && pages < 3) {
            pages++;
        };
        if(ev.wheelDelta > 0 && pages > 0) {
            pages--;
        };

        setTimeout(() => {
            mainPage.style.top = -pages * 100 + 'vh';
        }, 0);
        setTimeout(() => {
            isRoll = true;
        }, 500);
    };
});

window.onresize = function() {
    mainPage.style.transition = '.3s linear';
}