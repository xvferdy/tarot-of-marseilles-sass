// SCROLL EVENT
const nav = document.querySelector("nav");
const primary = "#8675a9";
const secondary = "#efbbcf";
const third = "#c3aed6";

window.addEventListener("scroll", () => {
	// nav border btml
	if (pageYOffset > 500) {
		nav.style.borderBottom = "1px dotted black";
	} else if (pageYOffset < 500 && pageYOffset > 100) {
		// nav.style.borderBottom = "none";
		nav.style.borderBottom = "1px dotted transparent";
	}
	// body bg
	if (pageYOffset >= 1000) {
		document.querySelector("body").style.backgroundColor = third;
		nav.style.backgroundColor = third;
	} else {
		document.querySelector("body").style.backgroundColor = secondary;
		nav.style.backgroundColor = secondary;
	}
});
