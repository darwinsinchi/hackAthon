//First Button
let changeColor = document.getElementById("changeColor");
changeColor.addEventListener("click", deleteEverything);
let stackOverflow = document.getElementById("stackOverflow");
stackOverflow.addEventListener("click", goToStack);

//changeColor.style.backgroundColor = data.color;
//changeColor.setAttribute("value", data.color);

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
  console.log("it worked i guess");
  chrome.tabs.create({ url: newURL });
}
