const audrey = document.getElementById("audrey")
const container = document.getElementById("container")
/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
container.addEventListener("scroll", function () {
    document.getElementById("audrey").style.transform = "scale(3, 4)";
    //document.querySelector(".trans").toggleClass("trans")
   })   
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */