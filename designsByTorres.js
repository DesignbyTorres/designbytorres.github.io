

 var btn = document.getElementsByClassName("smallBox");
//for (let i=0; i<btn.length; i++) {
//    console.log(btn[i].src);
//}

for (let i=0; i<btn.length; i++) {
    console.log(btn[i].src);
btn[i].addEventListener("click", makeBig);
}

let showCase = document.getElementById("largeBox");

function makeBig() {
    let theSource = this.src;
    console.log(this.src);
//    var largeBox = 
document.getElementById("showCase").src = theSource;
//    event.preventDefault();
// use prevent.. if using submit button as it reloads the page   
}
    