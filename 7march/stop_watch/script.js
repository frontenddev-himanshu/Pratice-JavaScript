let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);

    display.innerText =
        `${String(minutes).padStart(2, '0')}:
         ${String(seconds).padStart(2, '0')}:
         ${String(milliseconds).padStart(2, '0')}`;
}

startStopButton.addEventListener("click", () => {
    if (isRunning) {
        clearInterval(timer);
        startStopButton.innerText = "Start";
    } else {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(updateTime, 10);
        startStopButton.innerText = "Stop";
    }
    isRunning = !isRunning;
});

resetButton.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    display.innerText = "00:00:00";
    startStopButton.innerText = "Start";
});