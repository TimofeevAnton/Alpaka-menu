import "/src/scss/styles.scss"

initPage()

function initPage() {
	initSubMenuHovers()
	initNavBar()
}

function initSubMenuHovers() {
	const subs = document.querySelectorAll(".has-sub-menu")

	subs.forEach(item => {
		item.addEventListener("mouseenter", e => {
			const width = window.innerWidth
			if (width <= 992) return
			e.target.closest(".has-sub-menu").classList.add("active")
		})
		item.addEventListener("mouseleave", e => {
			const width = window.innerWidth
			if (width <= 992) return
			e.target.closest(".has-sub-menu").classList.remove("active")
		})
	})
}

function initNavBar() {
	const burger = document.querySelector(".header__burger")
	const navBar = document.querySelector(".menu")
	const body = document.querySelector("body")
	const subMenuBtn = document.querySelectorAll(".has-sub-menu")

	const toggleNavBar = () => {
		burger.classList.toggle("active")
		navBar.classList.toggle("active")
		body.classList.toggle("navBarOpened")
	}

	burger.addEventListener("click", toggleNavBar)

	navBar.addEventListener(
		"click",
		e => {
			if (e.target.classList.contains("menu")) {
				e.stopPropagation()
				toggleNavBar()
			}
		},
		true
	)

	subMenuBtn.forEach(menuBtn => {
		menuBtn.addEventListener("click", e => {
			console.log("click")
			const width = window.innerWidth
			if (width > 992) return
			e.stopPropagation()
			if (e.target.classList.contains("has-sub-menu") || e.target.parentElement.classList.contains("has-sub-menu")) {
				menuBtn.classList.toggle("active")
			}
		})
	})
}
