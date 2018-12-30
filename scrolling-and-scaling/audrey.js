const audrey = document.getElementById("audrey")
const container = document.getElementById("container")
console.log(audrey.innerHTML);
console.log(container.innerHTML);

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    let ywindow = window.scrollY;
    console.log("y = " + ywindow);
    let y3 = ywindow / 3;
    console.log("y3 = " + y3);
    let y4 = ywindow / 4;
    console.log("y4 = " + y4);

    // let cvarheight = container.style.height;
    // cvarheight = (Math.round(y4) + "px");
    // let cvarwidth = container.style.width;
    // cvarwidth = (Math.round(y3) + "px");
    // console.log("container height = " + cvarheight);
    // console.log("container width = " + cvarwidth);
    
    let avarheight = audrey.style.height;
    avarheight = (Math.round(y4) + "px");
    let avarwidth = audrey.style.width;
    avarwidth = (Math.round(y3) + "px");
    console.log("audrey height = " + avarheight);
    console.log("audrey width = " + avarwidth);
    })

        /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */