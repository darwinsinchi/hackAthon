let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute("value", data.color);
  changeColor.addEventListener("click", deleteEverything);
  function deleteEverything() {
    chrome.windows.getAll({}, function(windows) {
      for (var i = 0; i < windows.length; i++)
        chrome.windows.remove(windows[i].id);
    });
  }
});
