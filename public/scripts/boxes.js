$( init );

function init() {

  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  $('#boxPile').html( '' );
  $('#boxSlots').html( '' );

  var numbers = [ 1, 2, 3, 4, 5 ];
  numbers.sort( function() { return Math.random() - .5 } );

  for ( var i=0; i<5; i++ ) {
    $('<div>' + '</div>').data( 'number', numbers[i] ).attr( 'id', 'box'+numbers[i] ).appendTo( '#boxPile' ).draggable( {
      containment: '#content',
      stack: '#boxPile div',
      cursor: 'move',
      revert: true
    } );
  }

  for ( var i=1; i<=5; i++ ) {
    $('<div>' + '</div>').data( 'number', i ).appendTo( '#boxSlots' ).droppable( {
      accept: '#boxPile div',
      hoverClass: 'hovered',
      drop: handleBoxDrop
    } );
  }

}

function handleBoxDrop( event, ui ) {
  var slotNumber = $(this).data( 'number' );
  var boxNumber = ui.draggable.data( 'number' );


  ui.draggable.addClass( 'correct' );
  ui.draggable.draggable( 'disable' );
  $(this).droppable( 'disable' );
  ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
  ui.draggable.draggable( 'option', 'revert', false );



}
