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

/*
Here's the idea:
use the on keyup event (https://stackoverflow.com/questions/14411235/while-typing-in-a-text-input-field-printing-the-content-typed-in-a-div) 
and each time attempt to calculate the hours worked given the inputs currently in both fields (if failed, just say 0 hours worked)

onfocusout, it will check the input and format as close as possible to the correct format
	- If they don't put AM/PM assume military time and convert it to AM/PM
	- If 10:00am, make it 10:00 AM.
	After input is repaired, call updateHoursWorked.
*/

//Will convert any input into a time value (hour and min), if failed it will do midnight
function convertInputToTime() {

}

//Takes convertInputToTime value of finalized input field and takes this hour and minutes value to format proper string
// IE: 10:00pm, passed to convertInputToTime returns 22 hr and 0 min, which then is converted to 10:00 PM (replaces input field)
function repairInput() {

}

//Takes the two input fields, run convertInputToTime and tried to compute time difference between the two
//If unable to compute, set to 0 hours worked
function updateHoursWorked() {

}