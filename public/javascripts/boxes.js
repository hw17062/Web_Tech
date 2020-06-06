


function createBox(){

    var number = Math.random() - .5;
    $('<li>' + '</li>').attr('class', 'list').attr('id','slot'+ number).appendTo( '#items' );
    $(".list").resizable({
              handles: 'se',

          });
    var slot = document.getElementById('slot' + number);
    $('<button>X</button>').attr('class', 'btn').attr('id','close'+number).appendTo(slot);


    var closeBtn = document.getElementById('close' + number);
    $(closeBtn).click(function () {
      $(slot).remove();
      event.stopPropagation();
    })
}
