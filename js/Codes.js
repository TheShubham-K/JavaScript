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

// Functions Scope 🤯
var outsideFun = "outside";

function myFun() {
  insideFun = "inside";
  console.log(outsideFun);
  console.log(insideFun);
}

myFun();
console.log(outsideFun);
console.log(insideFun);

// Functions Within Function

var outpus = document.getElementById("output");
var a = 1000;

function outsideFun() {
  var b = 2000;

  function insideFun() {
    b++;
    return b;
  }
  insideFun();
  var c = insideFun();
  var d = function () {
    b++;
    return b;
  };
  d();
  var e = d();
  console.log(b);
}
outsideFun();
outsideFun();
outsideFun();


// Callback code

var output = document.getElementById("output");

function makeMessage(s1, s2, callback) {
  var result1 = callback(s1, s2);
  output.innerHTML += result1;
}
makeMessage("hello", "world", function (s1, s2) {
  var result2 = s1 + s2 + "worked";
  return result2;
})
makeMessage("Java", "Script", function (s1, s2) {
  var result2 = s1 + s2 + " is great" + s1;
  return result2;
})