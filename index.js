let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
let m = document.querySelector(".main-body");

let btn1 = document.getElementById("resume-button-1");
let btn2 = document.getElementById("resume-button-2");

btn1.addEventListener("click", () => {
	window.open(
		(href =
			"https://drive.google.com/file/d/1-jsug8lcVHdsVM4wRvYzYFf0mvAviXZl/view?usp=sharing")
	);
});

btn2.addEventListener("click", () => {
	window.open(
		(href =
			"https://drive.google.com/file/d/1-jsug8lcVHdsVM4wRvYzYFf0mvAviXZl/view?usp=sharing")
	);
});

let count = 0;
// menu.addEventListener("click", () => {
// 	menu.classList.toggle("bx-x");
// 	navbar.classList.toggle("open");

// 	m.style.marginTop = "200px";
// 	count++;
// 	if (count % 2 == 0) {
// 		m.style.marginTop = "0px";
// 	}

// 	if (m.classList.contains("m-t")) {
// 		m.classList.remove("m-t");
// 	} else {
// 		m.classList.add("m-t");
// 	}
// });

function toggleBar() {
	menu.classList.toggle("bx-x");
	navbar.classList.toggle("open");
	count++;
	m.classList.toggle("m-t");
}

menu.addEventListener("click", (e) => {
	e.preventDefault();
	toggleBar();
});

let nav = navbar.querySelectorAll("a");

nav.forEach((link) => {
	link.addEventListener("click", () => {
		if (navbar.classList.contains("open")) {
			toggleBar();
		}
	});
});
