let popup = document.querySelector('.popup');
let popupBg = document.querySelector('.popup__bg');

document.addEventListener('click', () => {
    popup.classList.remove('active');
    popupBg.classList.remove('active');
});

setIdleTimeout(6000, function() {
    popup.classList.add('active');
    popupBg.classList.add('active');
});

function setIdleTimeout(millis, onIdle, onUnidle) {
    var timeout = 0;
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
        } else {
          onUnidle();
        }
        document.removeEventListener("mousemove", onActivity);
        document.removeEventListener("keypress", onActivity);
        setTimeout(startTimer, 1000);
    }
}