function digitalClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormat = 'AM';
    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        timeFormat = 'PM';
    }
    if(hours < 10){
        hours = '0' + hours;
    }
    else{
        hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    else{
        minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }
    else{
        seconds;
    }
    let finalTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerText = timeFormat;
    setInterval(digitalClock,1000);
}
digitalClock();