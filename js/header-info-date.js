const timeP = document.querySelector('.info-list .date');
let date = new Date();
let year, month, day, week, hour, minute;
const separator = "/",
    colon = ":";
const weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

clock();
function clock() {
    date = new Date();

    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    week = date.getDay();
    hour = date.getHours();
    minute = date.getMinutes();

    hour < 10 ? hour = "0" + hour : hour;
    minute < 10 ? minute = "0" + minute : minute;

    timeP.innerHTML = year + separator 
        + month + separator 
        + day + separator 
        + weekday[week] + separator
        + hour + colon 
        + minute;
};

const update = setInterval(clock, 1000);