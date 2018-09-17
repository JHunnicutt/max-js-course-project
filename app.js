document.querySelector('button').onclick = function() {
	// Check out how you can traverse the DOM to get information!
	alert('Did you say? ' + this.previousElementSibling.value);
};

document.getElementById('changeText').onclick = function() {
	// Creating a text node is faster than swapping the innerHTML in many circumstances!
	// This is because the browser's rendering engine has to perform different tasks to interject
	// either thing, and the text node is simpler to deal with.
	document.querySelector('h1').appendChild(document.createTextNode('Heading has been changed'));
};
