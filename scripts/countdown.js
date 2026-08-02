const h2 = document.querySelector('#countdown');
const startButton = document.querySelector('#startButton');
let startTime = 10;

startButton.addEventListener('click', () => {
    startButton.textContent = "Countdown in progress...";

    setInterval(() => {
        if (startTime >= 0) {
            h2.textContent = startTime;
            startTime--;
        }

        else {
            setTimeout(() => {
                h2.textContent = "Time is up!";
            });
        }
    }, 1000);
});