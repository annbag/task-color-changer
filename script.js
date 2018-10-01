const divs = document.querySelectorAll('div');

function changeColor() {
	document.body.className = this.className;
} 

divs.forEach(function (div) {
	div.addEventListener('click', changeColor)
})

