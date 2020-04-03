const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const setAlarmBtn = document.querySelector('#setAlarm');
const resetAlarmBtn = document.querySelector('#resetAlarm');
const times = document.querySelector('#times');
const alarmDiv = document.querySelector(".information-alarm");
let alarm = null;

setAlarmBtn.onclick = function() {
    alarm = document.getElementById('alarm').value;
    if (alarm){
        alarmDiv.innerHTML = "La alarma sonara a las " + alarm;
    }
};

resetAlarmBtn.onclick = function () {
    document.getElementById('alarm').value = null;
    alarmDiv.innerHTML = "Alarma desactivada correctamente";
    alarm = null;
};

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    clockSound(mins, seconds);
    alarmSound(hour, mins, seconds);
    setTime(hour, mins, seconds);
}

setInterval(setDate, 1000);

setDate();

function clockSound(mins, seconds) {
    if (mins === 0 && seconds === 0){
        let audio = document.querySelector('#hourlychimebeg');
        audio.currentTime = 0;
        audio.play();
    }
}

function alarmSound(hour, minutes, seconds) {
    if (alarm){
        let alarms =  alarm.split(":");
        if (hour === parseInt(alarms[0]) && minutes === parseInt(alarms[1]) && seconds === 0){
            console.log('Entra a la alarma');
            let audio = document.querySelector('#bigbenstrikes');
            audio.currentTime = 0;
            audio.play();
        }
    }
}

function setTime(h, m, s) {
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    times.innerHTML = h +":"+ m +":"+ s;
}