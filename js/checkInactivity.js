const popup = document.querySelector('.popup');
const popupBg = document.querySelector('.popup__bg');
const button = document.querySelector('.popup__bg button');
let closePage;

document.addEventListener('click', () => {
    popup.classList.remove('active');
    popupBg.classList.remove('active');
});

setIdleTimeout(65000, function() {
    popup.classList.add('active');
    popupBg.classList.add('active');
    closePage = setTimeout(() => window.close(), 10000);
});

button.addEventListener('click', () => clearTimeout(closePage));

function setIdleTimeout(millis, onIdle) {
    let timeout = 0;
    startTimer();

    function startTimer() {
        timeout = setTimeout(onExpires, millis);
        document.addEventListener("mousemove", onActivity);
        document.addEventListener("keypress", onActivity);
    }
    
    function onExpires() {
        timeout = 0;
        onIdle();
    }

    function onActivity() {
        if (timeout) {
          clearTimeout(timeout);
        }
        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keypress", onActivity);
        setTimeout(startTimer, 1000);
    }
}