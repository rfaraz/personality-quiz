//Global Variables
//Initiate variables to track the questions answered and the score for each answer choice
var answered = 0;
var fireScore = 0;
var waterScore = 0;
var airScore = 0;
var earthScore = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

//Initiate variables to store all the buttons
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

//Add event listeners for each button
q1a1.addEventListener("click", fire);
q1a2.addEventListener("click", water);
q1a3.addEventListener("click", air);
q1a4.addEventListener("click", earth);

q2a1.addEventListener("click", fire);
q2a2.addEventListener("click", water);
q2a3.addEventListener("click", air);
q2a4.addEventListener("click", earth);

q3a1.addEventListener("click", fire);
q3a2.addEventListener("click", water);
q3a3.addEventListener("click", air);
q3a4.addEventListener("click", earth);

q4a1.addEventListener("click", fire);
q4a2.addEventListener("click", water);
q4a3.addEventListener("click", air);
q4a4.addEventListener("click", earth);

q5a1.addEventListener("click", fire);
q5a2.addEventListener("click", water);
q5a3.addEventListener("click", air);
q5a4.addEventListener("click", earth);

q6a1.addEventListener("click", fire);
q6a2.addEventListener("click", water);
q6a3.addEventListener("click", air);
q6a4.addEventListener("click", earth);

restart.addEventListener("click", reset);

//Define functions
function fire() {
  fireScore += 1;
  answered += 1;
  
  //Get result
  if (answered >= 6) {
    getResult();
  }
}

function water() {
  waterScore += 1;
  answered += 1;
  
  //Get result
  if (answered >= 6) {
    getResult();
  }
}

function air() {
  airScore += 1;
  answered += 1;
  
  //Get result
  if (answered >= 6) {
    getResult();
  }
}

function earth() {
  earthScore += 1;
  answered += 1;
  
  //Get result
  if (answered >= 6) {
    getResult();
  }
}

function getResult() {
  if (fireScore >= 3) {
    result.innerHTML = "You Are Fire!";
  } 
  else if (waterScore >= 3) {
    result.innerHTML = "You Are Water!";
  } 
  else if (airScore >= 3) {
    result.innerHTML = "You Are Air!";
  } 
  else if (earthScore >= 3) {
    result.innerHTML = "You Are Earth!";
  }
  else {
    result.innerHTML = "All Four Elements Are Within You!";
  } 
}

function reset() {
  result.innerHTML = "Your Result Is...";
  answered = 0;
  fireScore = 0;
  waterScore = 0;
  airScore = 0;
  earthScore = 0;
}
