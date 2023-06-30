let n = 0;
const img = document.querySelectorAll("img");

function lazyLoad() {
	const scrollTop = document.body.scrollTop;
	for (let i = n; i < img.length; i++) {
		if (img[i].offsetTop < window.innerHeight + scrollTop) {
			img[i].src = img[i].dataset.src;
		}
		n = i + 1;
	}
}

let lazyImageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry, index) => {
		let lazyImage = entry.target;
		if (entry.isIntersecting) {
			lazyImage.src = lazyImage.dataset.src;
			observer.unobserve(lazyImage);
		}
	});
});
for (let i = 0; i < img.length; i++) {
	lazyImageObserver.observe(img[i]);
}
