const clock = document.querySelector(".clock");

let second = 0, minute = 0, hours = 0,
    intervalId;

const startStopwatch = () => {
    intervalId = setInterval(() => {
        if (second < 59) {
            second++;
        }
        else if (minute >= 59) {
            hours++;
            minute = 0;
        }
        else {
            second = 0;
            minute++;
        }

        const hr = String(hours).padStart(2, "0");
        const min = String(minute).padStart(2, "0");
        const sec = String(second).padStart(2, "0");

        clock.innerText = `${hr}:${min}:${sec}`;

    }, 1000);
};

const stopStopwatch = () => {
    clearInterval(intervalId);
}