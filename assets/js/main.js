let Header = document.querySelector(".Header")

let MenuClose = document.querySelectorAll(".close")
/* ----------------------- HEADER ----------------------- */
let Nav = document.querySelector(".wrapper-nav")
let MenuBurger = document.querySelector(".MenuBurger")

window.addEventListener("scroll", () => {
	window.scrollY >= 80
		? Header.classList.add("active")
		: Header.classList.remove("active")
})
/* ------------------------- NAV ------------------------ */

MenuBurger.addEventListener("click", () => {
	Nav.classList.toggle("active")
})

let search = document.getElementById("search-icon")
search.addEventListener("click", () => {
	document.querySelector(".input-search").classList.toggle("active")
})

$(".SellerCarousel").owlCarousel({
	center: true,
	items: 1,
	loop: true,
	autoplay: true,
	dots: false,
	autoplayHoverPause: true,
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
// testimonio

let carouselTest = $(".CarouselTes")

carouselTest.owlCarousel({
	center: true,
	items: 1,
	loop: true,
	margin: 30,
	nav: true,
	dots: false,
	video: true,
	// touchDrag: false,
	navText: [
		'<i class="fa-solid fa-caret-left"></i>',
		'<i class="fa-solid fa-caret-right"></i>',
	],
})
/* ------------------------ MODAL Testimonial ----------------------- */
const modalContainer = document.getElementById("ModalTestmonial"),
	modalContainerImg = document.getElementById("ModalTestmonial-content"),
	modalTitle = document.getElementById("ModalTestmonial-title"),
	modalImg = document.getElementById("ModalTestmonial-img"),
	modalInfo = document.getElementById("ModalTestmonial-info"),
	modalVideo = document.getElementById("Testmonial-video"),
	itemsTestimonialVideo = document.querySelectorAll(".item-testimonial-video"),
	itemsTestimonial = document.querySelectorAll(".item-testimonial")

// autoplay hover para videos

itemsTestimonialVideo.forEach((itemVid) => {
	itemVid.addEventListener("mouseenter", () => {
		setTimeout(() => {
			itemVid.play()
		}, 1000)
	})
	itemVid.addEventListener("mouseout", () => {
		itemVid.pause()
	})
})

// abir en modal

itemsTestimonial.forEach((item) => {
	item.addEventListener("click", () => {
		// recoleccion de datos
		let nameTestimonial = item.lastElementChild.firstElementChild.textContent
		let infoTestimonial = item.firstElementChild.firstElementChild.dataset.info
		let urlTestimonial = item.firstElementChild.firstElementChild.firstElementChild.src

		// tipo de elemento
		let typeElement = item.firstElementChild.firstElementChild.firstElementChild.nodeName

		switch (typeElement) {
			case "IMG":
				modalInfo.classList.remove("d-none")
				modalImg.classList.add("col-sm-6")
				// creacion de elemento img
				let ElementImg = `<img src='${urlTestimonial}' alt='' loading='lazy'/>`
				modalImg.innerHTML = ElementImg
				// inserccion de datos en el modal
				modalTitle.innerHTML = nameTestimonial
				modalInfo.innerHTML = infoTestimonial
				modalVideo.classList.add("d-none")
				modalContainerImg.classList.remove("d-none")
				modalContainer.classList.add("active")
				break

			case "VIDEO":
				// insercion del video
				modalVideo.firstElementChild.src = urlTestimonial
				const context = document.querySelector(".canvas").getContext("2d")
				modalVideo.classList.remove("d-none")
				modalContainerImg.classList.add("d-none")
				context.drawImage(
					item.firstElementChild.firstElementChild.firstElementChild,
					0,
					0,
					900,
					600
				)
				modalContainer.classList.add("active")

				break

			default:
				console.log("Error")
				break
		}
	})
})

modalContainer.addEventListener("click", (e) => {
	if (e.target.id == "ModalTestmonial" || e.target.classList == "container") {
		modalContainer.classList.remove("active")
	}
})

// close global

MenuClose.forEach((iconClose) => [
	iconClose.addEventListener("click", () => {
		Nav.classList.remove("active")
		modalContainer.classList.remove("active")
	}),
])
