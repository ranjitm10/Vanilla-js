// console.log("Lets see its working are not");
// var h = prompt("Hello world");
// console.log(h)
// alert("let start vanilla js and dont stop")

var buttont = document.querySelector(".button");
var txt = document.querySelector("#txt-area");
var out = document.querySelector("#output");


buttont.addEventListener("click", function abc() {
    out.innerText = "heheh  " + txt.value;
    console.log(out.innerText)
})
