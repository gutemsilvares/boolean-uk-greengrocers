const UlEl = document.querySelector('.item-list');
const storeDivEl = document.querySelector('.store--item-icon');
const liCartItems = document.querySelector('li');

//FUNCTION CREATE ITEMS GROCERIES
function createGroceriesItem(item) {
	const liEl = document.createElement('li');
	UlEl.append(liEl);

	const storeDivEl = document.createElement('div');
	storeDivEl.className = 'store--item-icon';
	liEl.append(storeDivEl);

	const imgEl = document.createElement('img');
	imgEl.src = 'assets/icons/001-beetroot.svg';
	imgEl.alt = 'beetroot';
	storeDivEl.append(imgEl);

	const btnEl = document.createElement('button');
	btnEl.innerText = 'Add to cart';
	storeDivEl.append(btnEl);
}

//FUNCTION createGroceries more ITEMS
function createGroceriesItems(items) {
	for (const item of items) {
		createGroceriesItem(item);
	}
}

//FUNCTION CARTS
function createCartItem(cart){
	
}

//FUNCTION createCartItems

function getGroceries() {
	fetch('http://localhost:3000/groceries')
		.then(function (response) {
			return response.json();
		})
		.then(function (items) {
			createGroceriesItems(items);
		});
}

createGroceriesItem();
getGroceries();
