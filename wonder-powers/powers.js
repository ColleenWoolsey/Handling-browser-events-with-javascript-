// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will
//  remove the disabled class on the corresponding
//  <section id="flight"> (section, not button) and
//  replace it with a class of enabled.

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction);
let flight = document.querySelector("#flight")

function flightHandlerFunction (newClass) {
    flight.classList.toggle("enabled");
    console.log(flight.classList);
}
document.querySelector("#activate-mindreading").addEventListener("click", mindHandlerFunction);
let mind = document.querySelector("#mindreading")

function mindHandlerFunction (newClass) {
    mind.classList.toggle("enabled");
    console.log(mind.classList);
}
document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction);
let xray = document.querySelector("#xray")

function xrayHandlerFunction (newClass) {
    xray.classList.toggle("enabled");
    console.log(xray.classList);
}    
// **************************************
// Write two more event handlers for activating and deactivating all powers when
// the corresponding buttons are clicked. You will need to use the
// document.querySelectorAll() method for these.

document.querySelector("#activate-all").addEventListener("click", powerUpFunction);
let powers = document.querySelectorAll(".disabled")

console.log(powers.length);

function powerUpFunction () {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.remove("disabled");
        powers[i].classList.add("enabled");
       
        console.log(powers[i].innerHTML);
        console.log(powers[i].classList)
    }
}

// **************************************

document.querySelector("#deactivate-all").addEventListener("click", powerDownFunction);

function powerDownFunction () {
    for (let i = 0; i < powers.length; i++) {
        powers[i].classList.remove("enabled");
        powers[i].classList.add("disabled");        
    }
}