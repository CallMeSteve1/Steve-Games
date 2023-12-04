function toggleElement()
{
	var paragraph = document.getElementById("toggleParagraph");
	var button = document.getElementById("toggleButton");
	
	// Check current state of the paragraph
	
	if (paragraph.style.display === "none" || paragraph.style.display === "") {
		// if it is hidden, show it
		paragraph.style.display ="block";
		button.classList.add("active");
		button.classList.remove("inactive");
	} else {
		//if it is visible then hide it
		parargraph.style.display = "none";
		button.classList.remove("active");
		button.classList.add("inactive");
	}
		
}