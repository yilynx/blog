const timeP = document.querySelector('.info-list .date');

clock();
function clock() {
    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let week = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let separator = " / ";
    let colon = " : ";
    let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    hour < 10 ? hour = "0" + hour : hour;
    minute < 10 ? minute = "0" + minute : minute;

    timeP.innerHTML = year + separator 
        + month + separator 
        + day + separator 
        + weekday[week] + separator
        + hour + colon 
        + minute;
};

const date = setInterval(clock, 1000);