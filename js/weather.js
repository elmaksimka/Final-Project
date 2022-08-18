var input = document.querySelector('.weather__form__input');
var temp = document.querySelector('.weather__response__temp');
var desc = document.querySelector('.weather__response__desc');
var btn = document.querySelector('.weather__form__button');

btn.addEventListener('click', (e) => e.preventDefault())

btn.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=bb264fbc9adefb525df4a7e9283969de')
.then(response => response.json())
.then(data => {
  const fahrenheitToCelsium = 274.15;
  var tempValue = Math.round(data['main']['temp'] - fahrenheitToCelsium);
  var descValue = data['weather'][0]['description'];

  temp.innerHTML = "Temperature - " + tempValue + "C";
  desc.innerHTML = "Description - " + descValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})