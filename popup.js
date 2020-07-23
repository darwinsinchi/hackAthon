//Buttons
let changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", deleteEverything);
let stackOverflow = document.getElementById("stackOverflow");
stackOverflow.addEventListener("click", goToStack);
let funPages = document.getElementById("funPages");
funPages.addEventListener("click", goToFun);
// let funPages = document.getElementById("funPages");
// funPages.addEventListener("click", goToFun);

//Delete the entire window
function deleteEverything() {
  chrome.windows.getAll({}, function(windows) {
    for (var i = 0; i < windows.length; i++)
      chrome.windows.remove(windows[i].id);
  });
}

let workPages = [
  "https://www.dummies.com/programming/java/javascript-for-dummies-cheat-sheet/",
  "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "https://reactjs.org/docs/getting-started.html",
  "https://docs.mongodb.com/",
  "https://brew.sh/"
];

function goToStack() {
  //an
  // var newURL =
  //   "https://www.dummies.com/programming/java/javascript-for-dummies-cheat-sheet/";
  let randomNumber = Math.floor(Math.random() * workPages.length);
  let newURL = workPages[randomNumber];
  console.log("stack overflow");
  chrome.tabs.create({ url: newURL });
}

let fun = [
  "https://www.cartoonnetwork.com/",
  "https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki",
  "http://www.dreamville.com/",
  "https://www.cnbc.com/",
  "https://robinhood.com/us/en/"
];

function goToFun() {
  //an
  // var newURL =
  //   "https://www.dummies.com/programming/java/javascript-for-dummies-cheat-sheet/";
  let randomNumber = Math.floor(Math.random() * fun.length);
  let newURL = fun[randomNumber];
  console.log("not coding");
  chrome.tabs.create({ url: newURL });
}
