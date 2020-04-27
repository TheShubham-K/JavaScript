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
  }),
  makeMessage("Java", "Script", function (s1, s2) {
    var result2 = s1 + s2 + " is great" + s1;
    return result2;
  })


// Exercise Tweak

var suits = ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var players = [];

function startDeal() {
  players = [];
  var num = Number(document.getElementById("players").value);
  for (var i = 0; i < num; i++) {
    players[i] = [];
  }
  var cards = buildCards();
  shuffleCards(cards);
  deal(cards);
}

function buildCards() {
  var cards = [];
  for (s in suits) {
    var bgColor = (suits[s] == "hearts" || suits[s] == "diams") ? "red" : "black";
    for (c in cardFace) {
      var card = {
        suit: suits[s],
        num: cardFace[c],
        bgColor: bgColor,
        v: (Number(c) + 2)
      }
      cards.push(card);
    }
  }
  return cards;
}

function shuffleCards(array) {
  for (var x = array.length - 1; x > 0; x--) {
    var ii = Math.floor(Math.random() * (x + 1));
    var temp = array[x];
    array[x] = array[ii];
    array[ii] = temp;
  }
  return array;
}

function deal(cards) {
  var num = players.length;
  var output = document.getElementById("output");
  var p = 0;
  for (var i = 0; i < cards.length; i++) {
    players[p].push(cards[i]);
    p++;
    if (p >= num) {
      p = 0;
    }
  }
  for (var i = 0; i < num; i++) {
    output.innerHTML += "<br>Players : " + (i + 1) + "<br>";
    for (var x = 0; x < players[i].length; x++) {
      var p = players[i][x];
      output.innerHTML += "<span style=\"color:" + p.bgColor + "\">" + p.num + "&" + p.suit + ";</span>";
    }
    output.innerHTML += "<br>";
  }
}

// pracatice question (What is the output ?)

var output = document.getElementById("output");
var response = "55"; // global
var a = "hello ";
var b = "world";
output.innerHTML = myFun2();

function myFun2() {
  var b = a + "world";
  return b;
}



// What will show in the div output when the code is run
// Answer -- there is an error in the code

var output = document.getElementById("output");
output.innerHTML = function ('hello');
var a = function (b) {
  var c = b + 'world';
}

// What will show in the div output when the code is run

var a = " World";
var output = document.getElementById("output");
(function () {
  var a = "Hello";
  output.innerHTML = a;
})();
output.innerHTML += a;

// What will show in the div output when the code is run
// Answer -- World Hello
var a = " Hello";
var output = document.getElementById("output");
(function () {
  var a = "World";
  output.innerHTML = a;
})();
output.innerHTML += a;


// What will show in the div output when the code is run
// Answer -- outside inside outside

var outsideFun = "outside";

function myFun() {
  var insideFun = "inside";
  console.log(outsideFun);
  console.log(insideFun);
}
myFun();
console.log(outsideFun);

// Window Object Methods 👨‍💻 

var output = document.getElementById("wrapper");
console.dir(window);

for (var prop in window) {
  document.write(prop + " " + window[prop] + "<br>");
}
output.innerHTML += window.innerHeight + " " + window.innerWidth;

function goBack() {
  window.history.go(-1);
}
// Print, prompt is a Builtin Function
print();
prompt();

// Navigator object

console.dir(Navigator)
// To Know user Agent
var output = document.getElementById("wrapper");
output.innerHTML = navigator.userAgent;

// DOM Traversing

document.body.children
document.body.children[3].innerHTML = "Google"
document.body.children[4].children[1].children[1].name