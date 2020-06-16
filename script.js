var button = document.getElementById("enter");

var input = document.getElementById("userinput");

var ul = document.querySelector("ul");


// Adding items if Enter Button or Key is Pressed
button.addEventListener("click", addItem);
document.addEventListener("keypress", function(event) {
	if (event.keycode === 13 || event.which === 13) {
		addItem();
	}
});

// Function to add new item to the list
function addItem() {
	if (input.value.length > 0) {
		var li = document.createElement("li");

		// Create a button Delete for Every New List Item
		var btn = document.createElement("button");

		// Putting Values into Elements
		btn.appendChild(document.createTextNode("Delete"));
		li.appendChild(document.createTextNode(input.value));

		// Adding Elements to its Parent
		li.appendChild(btn);
		ul.appendChild(li);
		
		// Resetting the value of TextBox to Empty String
		input.value = "";
	}
}


// If Something is clicked with "ul" as direct patent the add class .done
document.addEventListener("click", function(e) {
	if (e.path[1] === ul) {
		e.path[0].classList.toggle("done");
	}
});


// Removing The Li Element is Delete Button is pressed
document.addEventListener("click", function(e) {
	var a = e.target.parentElement;
	if (e.path[2] === ul) {
		a.remove();
	}
});