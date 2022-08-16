currentTime = new Date().getHours();

window.addEventListener("load", function() {
  if(currentTime >= 6 && currentTime < 21) {
      const navbar = document.querySelector('.navbar').style.backgroundColor = 'lightblue';
      const slider = document.querySelector('.slider').style.backgroundColor = 'lightblue';
      const about = document.querySelector('.about').style.backgroundColor = 'grey';
      const portfolio = document.querySelector('.portfolio').style.backgroundColor = 'orange';
      const blog = document.querySelector('.blog').style.backgroundColor = 'gray';
      const contact = document.querySelector('.contact').style.backgroundColor = 'rgb(162, 97, 97)';
      const dark = document.querySelector('.dark_theme').style.display = 'block';
      const light = document.querySelector('.light_theme').style.display = 'none';
      document.body.style.color = '#000';
  }else {
      const navbar = document.querySelector('.navbar').style.backgroundColor = '#000';
      const slider = document.querySelector('.slider').style.backgroundColor = '#000';
      const about = document.querySelector('.about').style.backgroundColor = '#000';
      const portfolio = document.querySelector('.portfolio').style.backgroundColor = '#000';
      const blog = document.querySelector('.blog').style.backgroundColor = '#000';
      const contact = document.querySelector('.contact').style.backgroundColor = '#000';
      const dark = document.querySelector('.dark_theme').style.display = 'none';
      const light = document.querySelector('.light_theme').style.display = 'block';
      document.body.style.color = '#fff';
  }
})