var timeoutInMiliseconds = 6000;
var timeoutId; 
  
function startTimer() { 
    timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
}
  

function doInactive() {
  
  // setTimeout(function(){myWindow.self.close();}, 15000);
  // const isConfirmed = confirm('Are you here?');
  // if (isConfirmed){
  //   showOk();
  // } else {
  //   console.log('ez')
    
  //   showCancel();
  // }
}
function showOk() {
  alert('Don`t sleep!');
}
function showCancel() {
  console.log('closing')
  window.top.close();
}
 
 
function setupTimers () {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
     
    startTimer();
}

function resetTimer() { 
  window.clearTimeout(timeoutId)
  startTimer();
}
  
setupTimers();