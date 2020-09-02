function currentTime() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDay();
    changeDay(day);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = `${hour}:${min}:${sec}`;
    setTimeout(function () { currentTime() }, 1000); /* setting timer */
}
function updateTime(k) {
    if (k < 10) {
        k = `0${k}`;
    }
    return k
}
currentTime(); /* calling currentTime() function to initiate the process */

function changeDay(dat) {
    //console.log(dat)
    document.getElementById(dat).style.textShadow = "0px 0px 22px #FFFFFF";
    document.getElementById(dat).style.color = "#d9e1e4";
}