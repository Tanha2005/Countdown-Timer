const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');


const formatTime = (time)=> {
    return time < 10 ? `0${time}` : time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; 

    // calclulate days, hours, mins, secs from timedifferent
    let calcSecs = Math.floor(timeDifference / 1000) % 60;
    let calcMins = Math.floor(timeDifference / 1000/60) % 60;
    let calcHours = Math.floor(timeDifference / 1000/60/60) % 24;
    let calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);
   

days.textContent = formatTime(calcDays);
mins.textContent = formatTime(calcMins);
hours.textContent = formatTime(calcHours);
secs.textContent = formatTime(calcSecs);

}

const countDown = (targetDate) => {
setInterval(() => updateCountDown(targetDate), 1000);
};

const targetDate = new Date("June 21 2024 07:30");
countDown(targetDate);