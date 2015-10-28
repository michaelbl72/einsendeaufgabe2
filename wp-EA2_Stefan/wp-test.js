// Funktion zum Aktivieren der Eventlistener
function addListenersFirst() {
    
    //EventListener für Aufgabe 1
    var lbox = document.getElementsByClassName("linkebox");
    lbox[0].addEventListener('click', copyMe);

    var rbox = document.getElementsByClassName("rechtebox");
    rbox[0].addEventListener('mouseover', flipMe);
    
    //EventListener für Aufgabe 2
    var ma = document.querySelectorAll("#a2 input");
    ma[0].addEventListener('click', makeAlerts);
    
    //EventListener für Aufgabe 3
    var sw = document.getElementById('switch');
    sw.addEventListener('click', switchMe);
    
    //EventListener für Aufgabe 4
    var cfl = document.getElementById('colorLeft');
    cfl.addEventListener('change', changeColor);
    var cfm = document.getElementById('colorMiddle');
    cfm.addEventListener('change', changeColor);
    var cfr = document.getElementById('colorRight');
    cfr.addEventListener('change', changeColor);
    
    //EventListener für Aufgabe 5
    var ct = document.getElementById('createtext');
    ct.addEventListener('click', createText);
    
}

// Die Funktion addListenersFirst wird automatisch geladen, damit die EventListener aktiviert werden
window.onload = addListenersFirst;


// Funktionen für Aufgabe 1
function copyMe() {
    var lbox = document.getElementsByClassName("linkebox");
    var oben = lbox[0].innerHTML;
    var unten = document.getElementById('container');
    unten.innerHTML = lbox[0].innerHTML;
}

function flipMe() {
    var rbox = document.getElementsByClassName("rechtebox");
    var unten = document.getElementById('container2');
    unten.innerHTML = rbox[0].innerHTML;
    rbox[0].innerHTML = '';
}


// Funktionen für Aufgabe 2
function makeAlerts() {
    var absatz = document.querySelectorAll("#a2 p");
    absatz[0].addEventListener('click', showAlert);
    absatz[1].addEventListener('click', showAlert);
    absatz[2].addEventListener('click', showAlert);
}

function showAlert() {
    var text = this.innerHTML;
    window.alert(text);
}


// Funktion für Aufgabe 3        
function switchMe() {
    var div_l = document.getElementById('links').innerHTML;
    var div_m = document.getElementById('mitte').innerHTML;
    var div_links = document.getElementById('links');
    var div_mitte = document.getElementById('mitte');
    
    div_links.innerHTML = div_m;
    div_mitte.innerHTML = div_l;
}


// Funktion für Aufgabe 4
function changeColor() {

    var idName = this.id;

    //console.log("value: " + this.value + ", id: " + this.id);
    
    if (idName === "colorLeft") {
        links.className = this.value;
    } else if (idName === "colorMiddle") {
        mitte.className = this.value;
    } else {
        rechts.className = this.value;
    }
}


// Funktion für Aufgabe 5
function createText() {
    var name = document.getElementById('name').value;
    var number = document.getElementById('number').value;
    var thing = document.getElementById('thing').value;
    var text = document.getElementById('loesung');

    text.innerHTML = name + " hat " + number + " " + thing + ".";
}