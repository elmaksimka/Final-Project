function darkTheme() {
  document.querySelector('.navbar').style.backgroundColor = '#000';
  document.querySelector('.slider').style.backgroundColor = '#000';
  document.querySelector('.about').style.backgroundColor = '#000';
  document.querySelector('.portfolio').style.backgroundColor = '#000';
  document.querySelector('.blog').style.backgroundColor = '#000';
  document.querySelector('.contact').style.backgroundColor = '#000';
  document.querySelector('.weather').style.backgroundColor = '#000';
  document.querySelector('.dark_theme').style.display = 'none';
  document.querySelector('.light_theme').style.display = 'block';
  document.body.style.color = '#fff';
}

function lightTheme() {
  document.querySelector('.navbar').style.backgroundColor = '#7ababa';
  document.querySelector('.slider').style.backgroundColor = '#7ababa';
  document.querySelector('.about').style.backgroundColor = 'darkgrey';
  document.querySelector('.portfolio').style.backgroundColor = 'orange';
  document.querySelector('.blog').style.backgroundColor = 'lavenderblush';
  document.querySelector('.contact').style.backgroundColor = 'steelblue';
  document.querySelector('.weather').style.backgroundColor = 'aqua';
  document.querySelector('.dark_theme').style.display = 'block';
  document.querySelector('.light_theme').style.display = 'none';
  document.body.style.color = '#000';
}