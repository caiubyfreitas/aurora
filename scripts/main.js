/*
------------------------------------------------------------------------------------------------------------
Application entry point
------------------------------------------------------------------------------------------------------------
*/

window.onload = (w) => {

	// Show disclaimer message
	disclaimer();

	// Set event for toggle buttons control (mobile view only) 
	const overlay = document.querySelector(".overlay");
	const toggles = document.querySelectorAll(".toggle");
	function toggle(obj){
		toggles.forEach (obj => {
			obj.classList.toggle("enabled");
		});
		overlay.classList.toggle("visible");
	}	
}

function disclaimer(){
	console.log("\n\n/* DISCLAIMER */\nThis program is free software. It comes without any warranty. You can redistribute it and/or modify it under the terms of MIT license\n\nAURORA v1.0.1.\nhttps://github.com/caiubyfreitas/aurora\n\n");	
}

/* Retrieve the value of style sheet variable */
function getStylingProperty(propName){
	return getComputedStyle(document.documentElement).getPropertyValue(propName);
}

/* Define or change the value of style sheet variable */
function setStylingProperty(propName, propValue){
	document.documentElement.style.setProperty(propName, propValue);
}



