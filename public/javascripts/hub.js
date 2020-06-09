// script file for the Boxes.html file, this uses modules to make a cleaner
// work flow

// The premise is that we have a variety of 'Boxes' which are encapsulated by the
// abstractBox class. These will function as the various features on the web page
// Each user can create and edit boxes which will be saved under 'tabs'
// Each tab can have multiple boxes and each user can have multiple tabs

import user_view from "./modules/user_view.js";




window.newTab = function newTab(){
  var name = document.getElementById("newTabName").value || "newTab" + view.tabs.length;
  view.newTab(name);
  view.updateJSON();
  closeTabForm();
}


function closeTabForm() {
  document.getElementById("formNewTab").style.display = "none";
}

window.newBookmark = function newBookmark(){
  var link = document.getElementById("linkBookmark").value;
  var name = document.getElementById("nameBookmark").value;
  var color = document.getElementById("colorBookmark").value;
  view.tabs[currentTab].createBox(link, name, color);
  view.updateJSON();

  closebookmarkForm();
}

function closebookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "none";
}

window.changeTab = function changeTab (to){
  var newTab = 0;
  for (var i = 0; i < view.tabs.length; i ++){
    if(view.tabs[i].name == to) newTab = i;
  }
  view.tabs[currentTab].hideBoxes();

  currentTab = newTab;
  document.getElementById("tabName").innerHTML = view.tabs[currentTab].name;
  view.tabs[currentTab].showBoxes();
}

// This is an object used to create,load and store the user's custom layout
var view = new user_view();
var currentTab = 0;
document.getElementById("tabName").innerHTML = view.tabs[currentTab].name;
