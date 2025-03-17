let secElapsed = 0;
let interval = 0;
const time = document.getElementById("time")

function makeDoubleDigit(value){
    return String(value).padStart(2,"0")
}
function setTime() {
    const minutes = Math.floor(secElapsed/60);
    const seconds = secElapsed % 60; 
    time.innerHTML = `${makeDoubleDigit(minutes)}:${makeDoubleDigit(seconds)}`;
}
function timer() {
    secElapsed++;
    setTime();
}
function start() {
    if (interval) {stop()} 
    interval = setInterval(timer,1000)
}
function stop() {
    clearInterval(interval)
}
function reset() {
    stop()
    secElapsed = 0;
    setTime()
}