
function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
  document.getElementById("myNavBtn").style.left = "200px";
  document.getElementById("myNavBtn").onclick = function() { closeNav()};
 }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myNavBtn").style.left = "0";
  document.getElementById("myNavBtn").onclick = function() { openNav()};

}

function toggleTool() {
  dir = document.getElementById("toolOpener").innerHTML;
  if (dir == "&lt;") openTool();
  else closeTool();
}

function openTool() {
  document.getElementById("toolbar").style.left = "90%";
  document.getElementById("toolbar").style.width = "10%";
  document.getElementById("toolOpener").style.left = "86%";
  document.getElementById("toolOpener").innerHTML = ">";
 }

function closeTool() {
  document.getElementById("toolbar").style.left = "100%";
  document.getElementById("toolbar").style.width = "0";
  document.getElementById("toolOpener").style.left = "96%";
  document.getElementById("toolOpener").innerHTML = "<";
}

function openTabForm() {
      document.getElementById("formNewTab").style.display = "block";
    }

function closeTabForm() {
      document.getElementById("formNewTab").style.display = "none";
}

function openBookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "block";
    }

function closeBookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "none";
}
