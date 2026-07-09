//const lottoNumbers = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15];
//
//for (let i = 0; i < lottoNumbers.length; i++) {
//    console.log(lottoNumbers[i]);
//}

// getting random number by function
// (includes numbers provided)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
    

 let btn = document.getElementById("btn");
btn.addEventListener("click", pickNumbers);

function pickNumbers() {
    var showMe = document.getElementById("btn");
btn.innerHTML = "Picking numbers";
//    event.preventDefault();
// use prevent.. if using submit button as it reloads the page   
    
    
    const firstChoice = setTimeout(chooseOne, 1000);
    
    const secondChoice = setTimeout(chooseTwo, 2000);
    
    const thirdChoice = setTimeout(chooseThree, 3000);
    
    const fourthChoice = setTimeout(chooseFour, 4000);
    
    const fifthChoice = setTimeout(chooseFive, 5000);
    
    const sixthChoice = setTimeout(chooseSix, 6000);
    

    
    
    let allBallsClass = document.getElementsByClassName("allBalls");
    
   
    allBallsClass[0].classList.add("myStyleZero");
    allBallsClass[1].classList.add("myStyleOne");
    
    allBallsClass[2].classList.add("myStyleTwo");
    
    allBallsClass[3].classList.add("myStyleThree");
    
    allBallsClass[4].classList.add("myStyleFour");
    
    allBallsClass[5].classList.add("myStyleFive");
    
    setTimeout(removeAnimation, 6000);
    
    function removeAnimation() {
    //Remove all animation classes
     for (let i = 0; i < allBallsClass.length; i++) {
        allBallsClass[i].classList.remove("myStyleZero"); allBallsClass[i].classList.remove("myStyleOne");
         allBallsClass[i].classList.remove("myStyleTwo");
         allBallsClass[i].classList.remove("myStyleThree");
         allBallsClass[i].classList.remove("myStyleFour");
         allBallsClass[i].classList.remove("myStyleFive");
    }
    }
let lottoArray = [];

function chooseOne() {
    let x = getRndInteger(01, 70);
    console.log("#1 is: " + x);
    for (let i = 0; i < lottoArray.length; i++) {
        if (x == lottoArray[i]) {
        if (x <= 35) {
            x += 1;
        console.log("#1 + 1 is: " + x);
        } else {
            x -= 1;
        console.log("#1 - 1 is: " + x);
        }
        }
    }
    allBallsClass[0].innerHTML = x;
    btn.innerHTML = 
        "Picking numbers.";  
    lottoArray.push(x);
    console.log(lottoArray);
}
    function chooseTwo() {
    let x = getRndInteger(01, 70);
        console.log("#2 is: " + x);
        for (let i = 0; i < lottoArray.length; i++) {
        if (x == lottoArray[i]) {
        if (x <= 35) {
            x += 1;
        console.log("#2 + 1 is: " + x);
        } else {
            x -= 1;
        console.log("#2 - 1 is: " + x);
        }
        }
    }
        allBallsClass[1].innerHTML = x;
        btn.innerHTML = 
            "Picking numbers..";
        lottoArray.push(x);
    console.log(lottoArray);
}
    function chooseThree() {
    let x = getRndInteger(01, 70);
        console.log("#3 is: " + x);
        for (let i = 0; i < lottoArray.length; i++) {
        if (x == lottoArray[i]) {
        if (x <= 35) {
            x += 1;
        console.log("#3 + 1 is: " + x);
        } else {
            x -= 1;
        console.log("#3 - 1 is: " + x);
        }
        }
    }
    allBallsClass[2].innerHTML = x;
        btn.innerHTML = 
            "Picking numbers...";
        lottoArray.push(x);
    console.log(lottoArray);
}
    function chooseFour() {
    let x = getRndInteger(01, 70);
        console.log("#4 is: " + x);
        for (let i = 0; i < lottoArray.length; i++) {
        if (x == lottoArray[i]) {
        if (x <= 35) {
            x += 1;
        console.log("#4 + 1 is: " + x);
        } else {
            x -= 1;
        console.log("#4 - 1 is: " + x);
        }
        }
    }
  allBallsClass[3].innerHTML = x;
        btn.innerHTML = 
            "Picking numbers....";
        lottoArray.push(x);
    console.log(lottoArray);
}
    function chooseFive() {
    let x = getRndInteger(01, 70);
        console.log("#5 is: " + x);
        for (let i = 0; i < lottoArray.length; i++) {
        if (x == lottoArray[i]) {
        if (x <= 35) {
            x += 1;
        console.log("#5 + 1 is: " + x);
        } else {
            x -= 1;
        console.log("#5 - 1 is: " + x);
        }
        }
    }
  allBallsClass[4].innerHTML = x;
        btn.innerHTML = 
            "Picking numbers.....";
        lottoArray.push(x);
    console.log(lottoArray);
}
    function chooseSix() {
    let x = getRndInteger(01, 25);
  allBallsClass[5].innerHTML = x;
        btn.innerHTML = 
            "Get my numbers!";
}

    
    
}

