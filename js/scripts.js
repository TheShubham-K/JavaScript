// document.getElementById("but").click("click", f);

// function f() {
//   alert("Stop No Permissions!!!");
// }

// Example 1
var a = "Hello, ";

output.innerHTML = myFunction();

function myFunction() {
  var output = document.getElementById("output");
  var response = a + "World! <br>";
  return response;
}

// Example 2
var adj = ["super", "wonderful", "bad", "angry", "careful"];
var output = document.getElementById("output");

function myFun() {
  var question = prompt("what is your name?");
  var nameAdj = Math.floor(Math.random() * adj.length);
  output.innerHTML += adj[nameAdj] + " " + question + "<br>";
}

// Example 3

var a = myFun("Hello");
var b = myFun();

function myFun(para) {
  if (typeof para === "undefined") {
    para = "Hello World!";
  }
  output.innerHTML += para;
  return para;
}

// Anonymous Functions

var a = function (b) {
  var output = document.getElementById("output");
  output.innerHTML = "Welcome to an anonymous function " + b;
};

// Self-Invoking function

var a = "World!";
var output = document.getElementById("output");

(function () {
  var a = "Hello, ";
  output.innerHTML = a;
})();
output.innerHTML += a;
