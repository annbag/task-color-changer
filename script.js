const orange = document.querySelector(".orange");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
const body = document.querySelector("body");

orange.addEventListener('click', function() {
	body.style.backgroundColor = "orange";
}) 
green.addEventListener('click', function() {
	body.style.backgroundColor = "green";
}) 
blue.addEventListener('click', function() {
	body.style.backgroundColor = "blue";
}) 
yellow.addEventListener('click', function() {
	body.style.backgroundColor = "yellow";
}) 
red.addEventListener('click', function() {
	body.style.backgroundColor = "red";
}) 

