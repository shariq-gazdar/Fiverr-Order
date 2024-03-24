function disableContextMenu(event) {
  event.preventDefault();
}

// Attach event listener to disable context menu
window.addEventListener("contextmenu", disableContextMenu);
function disableContextMenu(event) {
  event.preventDefault();
}
window.addEventListener("contextmenu", disableContextMenu);

// Prevent viewing page source
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 85 && e.ctrlKey) {
    e.preventDefault();
  }
});

// Prevent inspecting
document.addEventListener("keydown", function (e) {
  if (e.keyCode == 123) {
    e.preventDefault();
  }
});
window.addEventListener("contextmenu", disableContextMenu);

// Prevent viewing page source
document.addEventListener("keydown", function (e) {
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    e.preventDefault();
  }
});
