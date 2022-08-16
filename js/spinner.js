window.addEventListener("load", function () {
  const loader = document.querySelector(".loading");
  setTimeout(() => { loader.className += " hidden"; }, 5000);
});