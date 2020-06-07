


function createBookmark(){

    var number = Math.random() - .5;
    $('<li>' + '</li>').attr('class', 'list').attr('id','slot'+ number).appendTo( '#items' );
    $(".list").resizable({
              handles: 'se',

          });
    var slot = document.getElementById('slot' + number);
    $('<button>X</button>').attr('class', 'btn').attr('id','close'+number).appendTo(slot);

    var text = document.getElementsByName("nameBookmark")[0].value;
    $('<a href="'+text+'">'+link+'</a>').attr('id', 'bookmarkLink').appendTo(slot);

    var closeBtn = document.getElementById('close' + number);
    $(closeBtn).click(function () {
      $(slot).remove();
      event.stopPropagation();
    })


}

function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
     }

function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
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
