// Create a button that makes the screen black when clicked
const button = document.createElement('button');
button.textContent = 'Make Screen Black';
button.style.fontSize = '1.2em';
button.style.padding = '10px 20px';
button.onclick = function() {
	document.body.style.backgroundColor = 'black';
	document.body.style.color = 'white';
};
document.body.appendChild(button);
