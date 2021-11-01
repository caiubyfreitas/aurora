/*
------------------------------------------------------------------------------------------------------------
Custom component to inject content into a HTML page
Usage: 
	<au-snippet-loader source="filename.ext"></au-snippet-loader>
     * The content of the file will be included at the position of the tag
------------------------------------------------------------------------------------------------------------
*/

export class SnippetLoader extends HTMLElement {
	constructor (){
		super();
	}
	load(){
		if (this.hasAttribute("source")){
			let fileName = this.getAttribute("source");
			let output = this;
			/* Make an HTTP request using the attribute value as the file name: */
			let xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					if (this.status == 200) {output.innerHTML = this.responseText;}
					if (this.status == 404) {output.innerHTML = "Page not found.";}
				}
			}
			xhttp.open("GET", fileName, true);
			xhttp.send();
		}		
	}
	connectedCallback() {
		this.load();
		const d = this.ownerDocument;
		const e = d.querySelectorAll(".toggle");
		e.forEach(obj => {
			obj.addEventListener("click", (e) => {
			console.log("clicked");
			})
		});
	}
	disconnectedCallback() {}
	attributeChangedCallback(attrName, oldVal, newVal) {}
}

customElements.define("au-snippet-loader", SnippetLoader);
