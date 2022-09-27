let Header = document.querySelector(".Header")

let MenuClose = document.querySelector(".close")
let Nav = document.querySelector(".wrapper-nav")
let MenuBurger = document.querySelector(".MenuBurger")

export function InitHeader() {
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
