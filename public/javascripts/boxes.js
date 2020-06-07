<<<<<<< HEAD
// script file for the Boxes.html file, this uses modules to make a cleaner
// work flow
=======


function createBookmark(){

    var number = Math.random() - .5;

    var text = document.getElementsByName("nameBookmark")[0].value;

    $('<li>' + '</li>').attr('class', 'bookmark').attr('id','slot'+ number).appendTo('#items');
    $(".bookmark").resizable({
              handles: 'se',

          });
    document.getElementById('slot' + number).style.background = getRandomColor();
    var slot = document.getElementById('slot' + number);

    $('<button>X</button>').attr('class', 'bookmarkClose').attr('id','close'+number).appendTo(slot);


    var closeBtn = document.getElementById('close' + number);
    $(closeBtn).click(function () {
      $(slot).remove();
      event.stopPropagation();
    })
    $('<a href="'+text+'" target="_blank">'+ 'Go to page' + '</a>').attr('class', 'bookmarkLink').attr('id', 'pagelink' + number).appendTo(slot);

    closeBookmarkForm();

  }

>>>>>>> ada

// The premise is that we have a variety of 'Boxes' which are encapsulated by the
// abstractBox class. These will function as the various features on the web page
// Each user can create and edit boxes which will be saved under 'tabs'
// Each tab can have multiple boxes and each user can have multiple tabs

<<<<<<< HEAD
import Tab from "./modules/tab.js";
=======
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}
>>>>>>> ada

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

<<<<<<< HEAD
function changeTab (to){
  tabs[currentTab].hideBoxes();
  currentTab = to;
  document.getElementById("tabName").innerHTML = currentTab;
  tabs[currentTab].showBoxes();
=======
function saveClass() {
    	var text = document.getElementsByName("name")[0].value;
      $('<a href="'+'#'+'">'+text+'</a>').attr('id', 'link').appendTo('#mySidenav');
      alert("Saved");
      closeForm();
}

function openBookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "block";
}

function closeBookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "none";
>>>>>>> ada
}
