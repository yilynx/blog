const mainPage = document.querySelector('.main-page');
let isRoll = true, 
    pages = 0,
    lastPage = 0;

let firstPageHeaderActive = document.querySelector('.first-page-header');

const navigationLis = document.querySelectorAll('.navigation .navigation-ul li');
const navigationLisLength = navigationLis.length;

navigationLis[pages].classList.add('active');

let navigationUl = document.querySelector('.navigation .navigation-ul');

document.addEventListener('mousewheel', (ev) => {
    var ev = window.event || ev;

    if(isRoll) {
        isRoll = false;

        lastPage = pages;

        if(ev.wheelDelta < 0 && pages < 3) {
            pages++;
        };
        if(ev.wheelDelta > 0 && pages > 0) {
            pages--;
        };

        pageToggle();
    };
});

navigationUl.addEventListener('click', clickUl, true);
function clickUl(e) {
    // console.log(e.target.nodeName === "LI");
    if(e.target.nodeName !== "LI"){
        return;
    }
    lastPage = pages;

    let i = 0;
    for(i = 0; i < navigationLisLength; i++){
        if(navigationLis[i] === e.target){
            break;
        }
    }
    // console.log(e.target, i)
    pages = i;

    pageToggle();
}

function pageToggle(){
    if(pages !== 0){
        firstPageHeaderActive.classList.add('first-page-header-active');
    }
    else{
        firstPageHeaderActive.classList.remove('first-page-header-active');
    }

    navigationLis[lastPage].classList.remove('active');
    navigationLis[pages].classList.add('active');

    setTimeout(() => {
        mainPage.style.top = -pages * 100 + 'vh';
    }, 0);
    setTimeout(() => {
        isRoll = true;
    }, 500);
}

window.onresize = function() {
    mainPage.style.transition = '.3s linear';
}