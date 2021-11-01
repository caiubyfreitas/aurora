/*
------------------------------------------------------------------------------------------------------------
(C) 2021 Freitas, Caiuby
This program is free software. It comes without any warranty. 
You can redistribute it modify it under the terms of MIT license.
------------------------------------------------------------------------------------------------------------
*/

import * as SnippetLoader from "../modules/snippet-loader.js"; 

/* Application entry point */ 
window.onload = (w) => {
	// Show disclaimer message
	disclaimer();
}

/* Print out disclaimer notes on the console window */
function disclaimer(){
	console.log("\n\n/* DISCLAIMER */\nThis program is free software. It comes without any warranty. You can redistribute it and/or modify it under the terms of MIT license\n\nAURORA v1.0.1.\nhttps://github.com/caiubyfreitas/aurora\n\n");	
}


