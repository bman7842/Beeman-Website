const hintElementID = "_hintmsg";

function displayHelp(element, msg, width) {
	var referenceElement = document.getElementById(element)
	var referenceParent = referenceElement.parentElement;

	if (referenceParent == null) {
		print("Attempted hint message for element: " + element)
		print("Element parent does not exist, unable to display hint.");
		return;
	}

	var hintFrame = document.createElement("div");
	hintFrame.classList.add("help-message");
	hintFrame.setAttribute('id', element+hintElementID);

	var textField = document.createElement("p");
	textField.style.width = width.toString()+"px";
	textField.innerHTML = msg;

	hintFrame.appendChild(textField);
	referenceParent.appendChild(hintFrame);
}

function removeHelp(element) {
	document.getElementById(element+hintElementID).remove();
}