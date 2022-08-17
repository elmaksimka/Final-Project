fetch("../books.json")
.then(response => response.json())
.then(books => {
	localStorage.setItem("books", JSON.stringify(books));
});

let container = document.querySelector(".blog__content");
let loadMoreButton = document.querySelector(".blog__content button");

let initialItems = 3;
let loadItems = 12;

function loadInitialItems(){
	let books = JSON.parse(localStorage.getItem("books"));
	let out = "";
	let counter = 0;
	for(let book of books){
		if(counter < initialItems){
			out += `
				<div class="blog__content__book" data-aos="fade-left">
					<div class="blog__content__book__picture">
						<img src="${book.image}">
					</div>
					<div class="blog__content__book__text">
						<p class="blog__content__book__text__title">${book.title}</p>
						<p class="blog__content__book__text__about">${book.about}</p>
						<p class="blog__content__book__text__info">Pages: ${book.pages} / Year: ${book.year} </p>
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
	let currentDisplayedItems = document.querySelectorAll(".blog__content__book").length;
	
	let out = "";
	let counter = 0;
	for(let book of books){
		if(counter >= currentDisplayedItems && counter < loadItems + currentDisplayedItems){
			out += `
				<div class="blog__content__book" data-aos="fade-right">
					<div class="blog__content__book__picture">
						<img src="${book.image}">
					</div>
					<div class="blog__content__book__text">
						<p class="blog__content__book__text__title">${book.title}</p>
						<p class="blog__content__book__text__about">${book.about}</p>
						<p class="blog__content__book__text__info">Pages: ${book.pages} / Year: ${book.year} </p>
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

	if(document.querySelectorAll(".blog__content__book").length == books.length){
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

loadInitialItems();