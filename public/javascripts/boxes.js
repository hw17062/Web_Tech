

function createBookmark(){

    var number = Math.random() - .5;
    $('<li>' + '</li>').attr('class', 'bookmark').attr('id','slot'+ number).appendTo( '#items' );
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

    var text = document.getElementsByName("nameBookmark")[0].value;
    $('<a href="'+text+'">'+link+'</a>').attr('id', 'bookmarkLink').appendTo(slot);
  }



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}

function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
     }

function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
}

function toggleTool() {
  dir = document.getElementById("toolOpener").innerHTML;
  console.log(dir);
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

function openForm() {
      document.getElementById("myForm").style.display = "block";
    }

function closeForm() {
      document.getElementById("myForm").style.display = "none";
}

function saveClass() {
    	var text = document.getElementsByName("name")[0].value;
      $('<a href="'+'#'+'">'+text+'</a>').attr('id', 'link').appendTo('#mySidenav');
      alert("Saved");
}

function openBookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "block";
}

function closeBookmarkForm() {
      document.getElementById("bookmarkForm").style.display = "none";
}
