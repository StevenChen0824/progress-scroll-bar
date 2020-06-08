const progressBar = document.querySelector("#progressBar");

console.log(progressBar);

console.log(document.body.scrollHeight);
console.log(window.innerHeight);

const scrollLength = document.body.scrollHeight - window.innerHeight;

console.log(scrollLength);

window.onscroll = function progress ()  {
	let progressPercent = (window.pageYOffset / scrollLength) * 100
	progressBar.style.height = progressPercent + '%'
	console.log(progressPercent)
}