# AURORA

Aurora is a boilerplate structure for fast web front-end development. The main objective here is to get a fully responsive GUI using the clean coding and raw HTML, CSS and JS only. In addition, this project development was based upon the following guiding principles:

<ol>
	<li>No external libraries are allowed</li>
	<li>All HMTL content must pass <a href="https://validator.w3.org">W3 validation criteria</a></li>
	<li>Self-closing tags are required for XHTML compatibility.</li>
	<li>No compatibility with browsers older than IE11 ("X-UA-Compatible" has no purpose here)</li>
	<li>Using modules is not the default approach but must be support because it is so much cool</li>
</ol>

The minimalist must-have folder/files backbone is as follows:

<pre>
\root
	index.html
	\images
		apple-touch-icon.png
		favicon-32x32.png
	\styles
		normalize.css
	\scripts
		main.js
	\modules
		--empty--
</pre>
 
 The semantics for versioning is based on the three levels. Given a version number MAJOR.MINOR.PATCH, increments will take place RESPECTIVELY when:
 
 <ul>
 	<li>incompatible API changes were implemented</li>
 	<li>new functionality was included in a backwards compatible manner</li>
 	<li>bug fixes were implemented</li>
</ul>
