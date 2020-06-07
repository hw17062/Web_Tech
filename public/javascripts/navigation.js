
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
 }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function toggleTool() {
  dir = document.getElementById("toolOpener").innerHTML;
  if (dir == "&lt;") openTool();
  else closeTool();
}

function openTool() {
  document.getElementById("toolbar").style.left = "92%";
  document.getElementById("toolbar").style.width = "8%";
  document.getElementById("toolOpener").style.left = "90%";
  document.getElementById("toolOpener").innerHTML = ">";
 }

function closeTool() {
  document.getElementById("toolbar").style.left = "100%";
  document.getElementById("toolbar").style.width = "0";
  document.getElementById("toolOpener").style.left = "98%";
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
