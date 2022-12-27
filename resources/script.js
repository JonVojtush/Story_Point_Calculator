"use strict";

// Global variables
let form = document.forms[0],
	complexity = form.elements["complexity"],
	time = form.elements["time"],
	value,
	label;

// Functions
function calculate() {
	value = time.value * complexity.value;
	if (value !== 1) {
		label = " Story Points";
	} else {
		label = " Story Point";
	};
	document.getElementById("label").innerHTML = label;
	document.getElementById("value").innerHTML = value;
};

// Event listeners. Submit button uses HTML
for(let i = 0; i < complexity.length; i++) {
	complexity[i].addEventListener("change", calculate, false);
};
for(let i = 0; i < time.length; i++) {
	time[i].addEventListener("change", calculate, false);
};

// Default form selection & loads. Complexity & time are defaulted using HTML
calculate();