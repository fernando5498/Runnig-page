
// Funcion para crear tarjetas de tienda, se use en el home y en store
function ItemsSeller(lisItems, obejectParent) {

    lisItems.forEach(item=>{
        let CardSeller = document.createElement("div")
        CardSeller.classList.add("item")
        CardSeller.innerHTML = `
                                <div class="CardSellers">
                                    <div class="CardSellers-content">
                                        <div class="CardSellers-img">
                                                        <img src="${item.img}" alt="${item.name}" loading="lazy" />
                                                    </div>
                                            <div class="CardSellers-icon"><i class="fa-solid fa-cart-shopping"></i></div>
                                            <div class="CardSellers-price">${item.price}</div>
                                        </div>
                                        <div class="CardSellers-title">
                                                    <h3 class="CardSellers-title-h">${item.name}</h3>
                                    </div>
                                </div>
        `
        obejectParent.appendChild(CardSeller)
        
    })
}

let Header = document.querySelector(".Header")

let MenuClose = document.querySelector(".close")
let Nav = document.querySelector(".wrapper-nav")
let MenuBurger = document.querySelector(".MenuBurger")

function InitHeader() {
	window.addEventListener("scroll", () => {
		window.scrollY >= 80
			? Header.classList.add("active")
			: Header.classList.remove("active")
	})
	/* ------------------------- NAV ------------------------ */

	MenuBurger.addEventListener("click", () => {
		Nav.classList.toggle("active")
	})
	MenuClose.addEventListener("click", () => {
		Nav.classList.remove("active")
	})

	
let search = document.getElementById("search-icon")
search.addEventListener("click", () => {
	document.querySelector(".input-search").classList.toggle("active")
})
}

let ItemStore = [
	{
		name: "Adidas Shoes",
		price: 100 + "$",
		img: "assets/img/PRODUCTO-1.jpg",
	},
	{
		name: "Sport Short",
		price: 100 + "$",
		img: "assets/img/PRODUCTO-2.jpg",
	},
	{
		name: "Running T-shirt",
		price: 100 + "$",
		img: "assets/img/PRODUCTO-3.jpg",
	},
	{
		name: "Adidas Shoes",
		price: 100 + "$",
		img: "assets/img/PRODUCTO-1.jpg",
	},
	{
		name: "Sport Short",
		price: 100 + "$",
		img: "assets/img/PRODUCTO-2.jpg",
	},
	{
		name: "Running T-shirt",
		price: 100 + "$",
		img: "assets/img/PRODUCTO-3.jpg",
	},
]


InitHeader()

const ShopingContainer = document.getElementById("Shoping-gallery-container")
ItemsSeller(ItemStore, ShopingContainer)
