let Header = document.querySelector(".Header")

let MenuClose = document.querySelector(".close")
/* ----------------------- HEADER ----------------------- */
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
/* --------------------- TESTIMONIAL -------------------- */

let CarouselTestimonials = document.getElementById("CarouselTestimonials")
let ItemsInfo = [{
        "name": "Jhon Smith",
        "img": "assets/img/person_3.png"
    },
    {
        "name": "Sam Smith",
        "img": "assets/img/person_3.png"
    },
    {
        "name": "Carlos Smith",
        "img": "assets/img/person_3.png"
    }
]
function ItemsTestimonials() {

    ItemsInfo.forEach(itemInfo => {
        let item = document.createElement("div")
        item.classList.add("item")
        item.innerHTML = `
            <div class="CardTestimonial">
                <div class="CardTestimonial-content">
                    <div class="CardTestimonial-img">
                        <img src="${itemInfo.img}" alt="${itemInfo.name}" loading="lazy" />
                    </div>
                </div>
                <div class="CardTestimonial-title">
                    <h3 class="CardTestimonial-title-h">${itemInfo.name}</h3>
                </div>
            </div>`
        
        CarouselTestimonials.appendChild(item)
    })
}


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



const SellerCarousel = document.getElementById("SellerCarousel")

InitHeader()
ItemsSeller(ItemStore, SellerCarousel)
ItemsTestimonials()


$(".SellerCarousel").owlCarousel({
	center: true,
	items: 1,
	loop: true,
	autoplay: true,
	dots: false,
	margin: 30,
	responsive: {
		768: {
			items: 2,
		},
		992: {
			items: 3,
		},
	},
})
setTimeout(() => {
	$(".CarouselTes").owlCarousel({
		center: true,
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		navText: [
			'<i class="fa-solid fa-caret-left"></i>',
			'<i class="fa-solid fa-caret-right"></i>',
		],
	})
}, 1000)

