import { InitHeader } from "./modules/header.js"
import { ItemsTestimonials } from "./modules/testimonial.js"
import { ItemsSeller } from "./modules/seller.js"
import { ItemStore } from "./modules/data.js"

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
