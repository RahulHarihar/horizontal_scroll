gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(gsap);

gsap.to("#page-2 h1", {
	transform: "translate(-300%)",
	scrollTrigger: {
		trigger: "#page-2 h1",
		scroller: "body",
		// markers: true,
		start: "top 30%",
		end: "bottom -50%",
		scrub: 9,
		pin: true,
		yoyo: true,
	},
});
