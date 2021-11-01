/*
------------------------------------------------------------------------------------------------------------
General purpose utilities to handle DOM objects
------------------------------------------------------------------------------------------------------------
*/

/* Retrieve the value of style sheet variable */
function getStylingProperty(propName){
	return getComputedStyle(document.documentElement).getPropertyValue(propName);
}

/* Define or change the value of style sheet variable */
function setStylingProperty(propName, propValue){
	document.documentElement.style.setProperty(propName, propValue);
}
