document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

window.addEventListener("scroll", () => {
	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav-link");

	let currentSection = "";
	sections.forEach(section => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (window.pageYOffset >= sectionTop - 200) {
			currentSection = section.getAttribute("id");
		}
	});

	navLinks.forEach(link => {
		link.classList.remove("active");
		if (link.getAttribute("href").substring(1) === currentSection) {
			link.classList.add("active");
		}
	});
});

window.addEventListener("scroll", () => {
	const scrolled = window.pageYOffset;
	const parallax = document.querySelector(".hero");
	if (parallax) {
		const speed = scrolled * 0.3;
		parallax.style.transform = `translateY(${speed}px)`;
	}
});
