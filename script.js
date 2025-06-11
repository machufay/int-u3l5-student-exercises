let body = document.querySelector("body");
let header = document.querySelector("h1");
let button = document.querySelector("button");
let img = document.querySelector("img");

// 1. Press the button on the webpage to change it up! Take notice of what happens.
// - What do you think .style does?

// 2. Try the following:
// - Make it so that the colors are different than what's used.
// - Try using a hex color code.
button.addEventListener("click", function() {
    body.style.backgroundColor = "black";
    header.style.color = "white";
    img.style.border = "5px solid white";
});
    
let xpos = 0;
let vel = 1;
let accel = 0.1;
console.log(xpos);
console.log(vel);
console.log(accel);
const block = document.querySelector(".block");

    function animate(){

     vel += accel;
      xpos += vel;
      block.style.left = xpos + 'px';
      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
