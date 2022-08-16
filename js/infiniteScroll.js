fetch("../books.json")
.then(response => response.json())
.then(books => {
	localStorage.setItem("books", JSON.stringify(books));
});

let container = document.querySelector(".content");
let loadMoreButton = document.querySelector(".content button");

let initialItems = 3;
let loadItems = 6;

function loadInitialItems(){
	let books = JSON.parse(localStorage.getItem("books"));
	let out = "";
	let counter = 0;
	for(let book of books){
		if(counter < initialItems){
			out += `
				<div class="book">
					<div class="left">
						<img src="${book.image}" alt="">
					</div>
					<div class="right">
						<p class="title">${book.title}</p>
						<p class="about">${book.about}</p>
						<p class="info">Pages: ${book.pages} / Year: ${book.year} </p>
					</div>
				</div>
			`;
		}
		counter++;
	}

	let div = document.createElement("div");
	container.insertBefore(div, loadMoreButton);
	div.innerHTML = out;	
}

function loadData(){
	let books = JSON.parse(localStorage.getItem("books"));
	let currentDisplayedItems = document.querySelectorAll(".book").length;
	
	let out = "";
	let counter = 0;
	for(let book of books){
		if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems){
			out += `
				<div class="book">
					<div class="left">
						<img src="${book.image}" alt="">
					</div>
					<div class="right">
						<p class="title">${book.title}</p>
						<p class="about">${book.about}</p>
						<p class="info">Pages: ${book.pages} / Year: ${book.year} </p>
					</div>
				</div>
			`;
		}
		counter++;
	}

	let div = document.createElement("div");
	container.insertBefore(div, loadMoreButton);
	div.innerHTML = out;	
	div.style.opacity = 0;

	if(document.querySelectorAll(".book").length == books.length){
		loadMoreButton.style.display = "none";
	}

	fadeIn(div);
}

function fadeIn(div){
	let opacity = 0;
	let interval = setInterval(function(){
		if (opacity <= 1) {
			opacity = opacity + 0.1;
			div.style.opacity = opacity;
		}else{
			clearInterval(interval);
		} 
	}, 30);
}

// window.onscroll = function(ev) {
//     if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//        loadData();
//     }
// };
loadInitialItems();