// console.log("Lets see its working are not");
// var h = prompt("Hello world");
// console.log(h)
// alert("let start vanilla js and dont stop")

var buttont = document.querySelector(".button");
var inputtxt = document.querySelector("#txt-area");
var out = document.querySelector("#output");

//server = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var server = "https://api.funtranslations.com/translate/pirate.json"
function baseURL(text){
    return server + "?" + "text=" + text
}
function abc(){
    var input = inputtxt.value;

    fetch(baseURL(input))
    .then(response => response.json())
    .then(json => console.log(json))

};


buttont.addEventListener("click",abc)
