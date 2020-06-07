// script file for the Boxes.html file, this uses modules to make a cleaner
// work flow

// The premise is that we have a variety of 'Boxes' which are encapsulated by the
// abstractBox class. These will function as the various features on the web page
// Each user can create and edit boxes which will be saved under 'tabs'
// Each tab can have multiple boxes and each user can have multiple tabs

import Tab from "./modules/tab.js";

var tabs = [];
tabs["Home"] = new Tab("Home")
var currentTab = "Home";
document.getElementById("tabName").innerHTML = currentTab;
$('<button>'+currentTab+'</button>').attr('id', 'tab' + currentTab).attr('class', 'tab').click(function () {changeTab("Home")}).appendTo('#mySidenav');


window.newBox = function newBox(){
  tabs[currentTab].createBox('link', '#ddd')
}

window.newTab = function newTab(){
  var name = document.getElementById("newTabName").value;
  tabs[name] = new Tab(name);
  $('<button>'+name+'</button>').attr('id', 'tab' + name).attr('class', 'tab').click(function () {changeTab(name)}).appendTo('#mySidenav');

  closeForm();
}

function closeForm() {
  document.getElementById("formNewTab").style.display = "none";
}

function changeTab (to){
  tabs[currentTab].hideBoxes();
  currentTab = to;
  document.getElementById("tabName").innerHTML = currentTab;
  tabs[currentTab].showBoxes();
}
