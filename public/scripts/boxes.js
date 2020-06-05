$( init );

function init() {


  $('#boxPile').html( '' );
  $('#boxSlots').html( '' );




}

function handleBoxDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var boxNumber = ui.draggable.data( 'number' );


  ui.draggable.addClass( 'correct' );
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable( 'option', 'revert', false );

}

function createBox(){

	var number = Math.random() - .5
    $('<div>' + '</div>').data( 'number', number ).attr( 'id', 'box'+number ).appendTo( '#boxPile' ).draggable( {
      containment: '#content',
      stack: '#boxPile div',
      cursor: 'move',
      revert: true
    } );

    $('<div>' + '</div>').data( 'number', number ).appendTo( '#boxSlots' ).droppable( {
      accept: '#boxPile div',
      hoverClass: 'hovered',
      drop: handleBoxDrop
    } );

    var box = document.getElementById('box' + number);
    var destination = document.getElementById('slot' + number);
   	box.position( { of: destination, my: 'left top', at: 'left top' } );

}
