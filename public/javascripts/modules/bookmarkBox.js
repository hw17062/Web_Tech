// The Simplest form of box, this holds a link which will redirect the user to
// when clicked

import absBox from "./abstractBox.js"
import tab from "./tab.js";

export default class bookmarkBox extends absBox{

  constructor(id, link, name,  color, tab){
    //   (id, slot, width, height)
    super(id,'slot' + id, 150, 200, tab);
    this.name = name;
    this.link = link;
    this.color = color;

    var self = this;  // needed for anon functions in jquery
    // create the HTML element for this box
    $('<li>' + this.name + '</li>')
        .attr('class', 'bookmark')
        .attr('id','slot'+ this.id)
        .attr('style','background: '+ this.color + ';')
        .click(function() {$('<a href="' + self.link + '" target="blank"></a>')[0].click();})
        .appendTo( '#items' );

    // $('<img src="/geticon?url=' + this.link + '" width="200" height="40">').appendTo(linkHTML);

    $(".bookmark").resizable({
              handles: 'se',
          });

    // track the HTML element of this box
    this.slotHTML = document.getElementById('slot' + this.id);

    $('<button>X</button>')
        .attr('class', 'bookmarkClose')
        .attr('id','close'+this.id)
        .appendTo(this.slotHTML);
    // next we are going to add a section for the icon of the bookmark
    $('<div>' + '</div>')
        .attr('class', 'icon')
        .attr('id', 'icon' + this.id)
        .appendTo(this.slotHTML);

    this.iconHTML = this.slotHTML = document.getElementById('icon' + this.id);
    this.getIcon(); // the the logo/icon for the bookmark


    // Add link
    // $('<a href="'+this.link+'" target="_blank">'+ 'Go to page' + '</a>').attr('class', 'bookmarkLink').attr('id', 'pagelink' + this.id).appendTo(this.slotHTML);
    // var linkHTML = document.getElementById('pagelink' + id);
    // $('<img src="' + this.link + '/favicon.ico" idth="200" height="40">').appendTo(linkHTML);

    var closeBtn = document.getElementById('close' + this.id);

    $(closeBtn).click(function () {
      self.deleteBox();
      tab.removeBox(self.id);
    });
  }
  getIcon(){

    var self = this;  //n needed for anon functions

    // The following creates a requests to an internal link whose body provides
    // the best icon it can find of target link
    var req = function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous
        xmlHttp.send(null);
    }

    // This is a callback from when the http request is finished
    // it will update the box with the icon found
    var updateImg = function (imgLink){
      self.iconHTML.style = 'background-image: url("'+  imgLink + '"); background-size: 100%; background-repeat: no-repeat;';
      //self.slotHTML.contentWindow.location.reload(true);
    }

    req("/geticon?url=" + this.link, updateImg)
  }
}
