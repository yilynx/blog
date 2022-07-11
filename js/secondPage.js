//header-info-date.js中的变量
// console.log(year, month, day, week, hour, minute);
let storageInfo = JSON.parse(localStorage.getItem('dailyLog'))
let createLi, spanRecordTime, spanDetail, spanOperate, btnEdit, btnDelete;

const secondPage = document.querySelector('.second-page');

const dailyLogUl = secondPage.querySelector('.daily-log-ul');

const appendLog = secondPage.querySelector('.append-log');

const bigAppendWidget = secondPage.querySelector('.big-append-widget');
const closeAppendWidgetBtn = bigAppendWidget.querySelector('.close-widget');
const appendBtn = bigAppendWidget.querySelector('.appendBtn');
const cancelBtn = bigAppendWidget.querySelector('.cancelBtn');

const inputDate = bigAppendWidget.querySelector('.date');
const inputTitle = bigAppendWidget.querySelector('.title');
const textarea = bigAppendWidget.querySelector('textarea');

secondPageInit();

appendLog.addEventListener('click', showAppendWidget);
closeAppendWidgetBtn.addEventListener('click', closeAppendWidget);
cancelBtn.addEventListener('click', closeAppendWidget);
appendBtn.addEventListener('click', addpendDetailLog);

function showAppendWidget(){
    bigAppendWidget.style.display = "block";
}

function closeAppendWidget(){
    bigAppendWidget.style.display = "none";
}

function secondPageInit(){
    // console.log(storageInfo);
    for(item of storageInfo){
        createNewLog(item);
    }
}

function addpendDetailLog(){
    let dailyLog = {
        date: inputDate.value,
        title: inputTitle.value,
        detail: textarea.value
    }
    // console.log(dailyLog)
    storageInfo.push(dailyLog);
    // console.log(storageInfo)
    localStorage.setItem('dailyLog', JSON.stringify(storageInfo))
    
    createNewLog(dailyLog);
}

function createNewLog(newLog){
    createLi = document.createElement('li');

    spanRecordTime = document.createElement('span')
    spanRecordTime.classList.add('record-time');
    spanRecordTime.innerText = newLog.date;

    spanDetail = document.createElement('span');
    spanDetail.classList.add('detail');
    spanDetail.innerText = newLog.detail;

    spanOperate = document.createElement('span')
        btnEdit = document.createElement('button')
        btnDelete = document.createElement('button')

    spanOperate.classList.add('operate-btn');
    spanOperate.appendChild(btnEdit);
    spanOperate.appendChild(btnDelete);

    btnEdit.innerHTML = "编辑";
    btnDelete.innerHTML = "删除";

    createLi.appendChild(spanRecordTime);
    createLi.appendChild(spanDetail);
    createLi.appendChild(spanOperate);

    dailyLogUl.appendChild(createLi);
}
