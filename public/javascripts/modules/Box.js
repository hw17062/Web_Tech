export default function Box(){
  var quantity = 0;
  return {createNew, loadFromSession}

  function createBox(){

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
  }

  function loadFromSession(){
    return
  }
}
