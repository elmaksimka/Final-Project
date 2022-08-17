let currentTime = new Date().getHours();

window.addEventListener("load", function() {
  if(currentTime >= 6 && currentTime < 21) {
      lightTheme();
  }else {
    darkTheme();
  }
})