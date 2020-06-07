// The Simplest form of box, this holds a link which will redirect the user to
// when clicked

import absBox from "./abstractBox.js"
import tab from "./tab.js";

export default class bookmarkBox extends absBox{

  constructor(id, link, color, tab){
    //   (id, slot, width, height)
    super(id,'slot' + id, 150, 200, tab);
    this.link = link;
    this.color = color;


    // create the HTML element for this box
    $('<li>' + '</li>').attr('class', 'bookmark').attr('id','slot'+ this.id).appendTo( '#items' );
    $(".bookmark").resizable({
              handles: 'se',
          });

    this.slotHTML = document.getElementById('slot' + this.id);

    $('<button>X</button>').attr('class', 'bookmarkClose').attr('id','close'+this.id).appendTo(this.slotHTML);
    // Add link
    $('<a href="'+this.link+'" target="_blank">'+ 'Go to page' + '</a>').attr('class', 'bookmarkLink').attr('id', 'pagelink' + this.id).appendTo(this.slotHTML);
    var linkHTML = document.getElementById('pagelink' + id);
    $('<img src="' + this.link + '/favicon.ico" idth="200" height="40">').appendTo(linkHTML);

    var closeBtn = document.getElementById('close' + this.id);
    var self = this;
    $(closeBtn).click(function () {
      self.deleteBox();
      tab.removeBox(self.id);
    });

  }
}
