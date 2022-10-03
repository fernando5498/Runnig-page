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

// close menu

MenuClose.forEach((iconClose) => [
	iconClose.addEventListener("click", () => {
		Nav.classList.remove("active")
	}),
])

/* ---------------------- CARRUSELES --------------------- */
// seller en Seccion Home
if (document.getElementById("SellerCarousel")) {
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
}

// testimonio + Modal
if (document.getElementById("CarouselTestimonials")) {
	$("#CarouselTestimonials").owlCarousel({
		center: true,
		items: 1,
		loop: true,
		margin: 120,

		nav: true,
		dots: false,
		video: true,
		navText: [
			'<i class="fa-solid fa-caret-left"></i>',
			'<i class="fa-solid fa-caret-right"></i>',
		],
	})

	/* ------------------------ MODAL Testimonial ----------------------- */
	const modalContainer = document.getElementById("ModalTestmonial"),
		modalVideo = document.getElementById("Testmonial-video"),
		itemsTestimonialVideo = document.querySelectorAll(".item-testimonial-video")
	// itemsTestimonial = document.querySelectorAll(".item-testimonial")

	// autoplay hover para videos

	itemsTestimonialVideo.forEach((itemVid) => {
		itemVid.addEventListener("mouseenter", () => {
			setTimeout(() => {
				itemVid.play()
				setTimeout(() => {
					itemVid.pause()
				}, 5000)
			}, 1000)
		})
		itemVid.addEventListener("mouseout", () => {
			itemVid.pause()
		})
	})

	// abir en modal

	itemsTestimonialVideo.forEach((item) => {
		item.addEventListener("click", () => {
			// recoleccion de datos
			let urlTestimonial = item.src
			// tipo de elemento

			// insercion del video
			modalVideo.firstElementChild.src = urlTestimonial
			const context = document.querySelector(".canvas").getContext("2d")
			context.drawImage(item, 0, 0, 900, 600)
			modalContainer.classList.add("active")
		})
	})
	// x del menu reusado para cerrar el modal tambien
	MenuClose.forEach((iconClose) => [
		iconClose.addEventListener("click", () => {
			modalContainer.classList.remove("active")
			modalVideo.firstElementChild.pause()
		}),
	])

	// cerrar modal por fuera
	modalContainer.addEventListener("click", (e) => {
		if (e.target.id == "ModalTestmonial" || e.target.classList == "container") {
			modalContainer.classList.remove("active")
		}
	})
}

/* -------------------- FIN CARRUSELS ------------------- */

/* ---------------------- QUESTIONS --------------------- */

if (document.querySelector(".Questions-item")) {
	let itemQuestions = document.querySelectorAll(".Questions-item-header")

	itemQuestions.forEach((item) => {
		item.addEventListener("click", () => {
			item.parentElement.classList.toggle("active")
			itemQuestions.forEach((item2) => {
				if (item2 !== item) {
					item2.parentElement.classList.remove("active")
				} else {
					console.log("hola")
				}
			})
		})
	})

	// movimiento de fondo
	window.addEventListener("mousemove", (e) => {
		let movingValue = document.querySelector(".Questions-bg")
		let x = (e.clientX * movingValue.dataset.value) / 250
		let y = (e.clientY * movingValue.dataset.value) / 150
		movingValue.style.transform = "translateX(" + x + "px) translateY(" + y + "px) "
	})
}
/* ------------------------ SHOP ------------------------ */

$(document).ready(function () {
	$(".filter-button").click(function () {
		let value = $(this).attr("data-filter")
		if (value == "all") {
			$(".filter").show()
		} else {
			$(".filter")
				.not("." + value)
				.hide()
			$(".filter")
				.filter("." + value)
				.show()
		}
	})

	if ($(".filter-buttons").removeClass("active")) {
		$(this).addClass("active").siblings().removeClass("active")
	}
})
