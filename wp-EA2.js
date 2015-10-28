/*
	Adds all initially (and only initially) needed eventListeners
	Do not add event listeners that are supposed to be added dynamically.
*/
function addListenersFirst(){
	// Add click listener to the upper div with className 'rechts'
	// a) put the div elements into a variable
	// b) use variable to add event listener
	var rechteBox = document.getElementsByClassName("rechtebox");
	rechteBox[0].addEventListener('mouseover', flipMe);
	// Add mouseover listener to the upper div with classname 'links'
	var linkeBox = document.getElementsByClassName("linkebox");
	linkeBox[0].addEventListener('click', copyMe);	


	// Add listeners to action elements for "Make Alerts" "Bezeichner" and "Schreibe den Text"
	var makealerts = document.querySelector("#a2 input");
	makealerts.addEventListener('click', makeAlerts);
	
	var bezeichner = document.querySelector("#switch");
	bezeichner.addEventListener('click', switchMe);
	
	var text = document.querySelector("#createtext");
	text.addEventListener('click', createText);
	// add listener to form input elements
	var farbe_links = document.getElementById('colorLeft');
    farbe_links.addEventListener('change', changeColor);
    var farbe_mitte = document.getElementById('colorMiddle');
    farbe_mitte.addEventListener('change', changeColor);
    var farbe_rechts = document.getElementById('colorRight');
    farbe_rechts.addEventListener('change', changeColor);

}


/*
	copyMe copies the text from one element to another
*/
function copyMe(){
	//alert("funktion copyMe");
	// put the "container"-element (to where the text should copied) into the 
	// variable container (target element)
	var container = document.getElementById('container');
	// put the element to be read into the variable divlinks (source element)
	var linkebox = document.getElementsByClassName("linkebox");
   	// put the content of the source element into text node of the target element
	container.innerHTML = linkebox[0].innerHTML;    
}

/*
	flipMe copies the text from one element to another and deletes the text from
	the original element.
*/
function flipMe(){
	// works similar to copyMe
	// in addition, delete the text from the source element
	var rechtebox = document.getElementsByClassName("rechtebox");
	var container = document.getElementById('container2');
   	container2.innerHTML = rechtebox[0].innerHTML;
	rechtebox[0].innerHTML = "";
}


/*
	makeAlerts puts alerts to several elements
*/
function makeAlerts(){
	var myp = document.querySelectorAll("#a2 p");
	// put event listener for each selected tag
	myp[0].addEventListener('click', showNewAlert);
	myp[1].addEventListener('click', showNewAlert);
	myp[2].addEventListener('click', showNewAlert);
}

/*
	evokes the alert
*/
function showNewAlert(){
	// An alert should be displayed with the text of the paragraph that evoked the function.
	// Use "this" to refer to the actual object
	var text = this.innerHTML;
	alert(text);
}

/*
	switchME switches the text of two boxes
*/
function switchMe(){
	var links_v = document.getElementById('links').innerHTML;
    var mitte_v = document.getElementById('mitte').innerHTML;
    var links_n = document.getElementById('links');
    var mitte_n = document.getElementById('mitte');
    
    links_n.innerHTML = mitte_v;
    mitte_n.innerHTML = links_v;
}

/*
	changeColor changes the color of the colored 
	boxes depending on the selection of the respective select box.
*/
function changeColor(){
	// Variable idName stores the ID of the elements that invoked this function
	var idName = this.id;

	if (idName === "colorLeft") {
        links.className = this.value;
    } else if (idName === "colorMiddle") {
        mitte.className = this.value;
    } else {
        rechts.className = this.value;
    }
	// Use if else statement to distinguish which select box has been used.
	// For each case: select the html element that correspond to the used select box.
	// For this element set a new attribute class with the name that corresponds to the selected value.
	// Have a look to the css to know which class will help you.

	// Console log if needed.
	console.log("value: " + this.value + ", id: " + this.id);
}

/*
	createText concatenates text from the input fields
*/
function createText(){
 	var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var thing = document.getElementById('thing').value;
    var text = document.getElementById('loesung');

    text.innerHTML = name + " hat " + number + " " + thing + ".";
}



window.onload=addListenersFirst;


