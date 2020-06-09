// a Tab is a saved stated of the user's layout. A use can have multiple tabs
// named how the wish, the idea is for them to have different ones for different
// scenarios

import bookmarkBox from "./bookmarkBox.js";

export default class tab{
  constructor(name){
    this.name = name;
    this.boxes = [];
    var self = this;
  }

  loadTab(){
    return
  }

  createBox(link,name, color){
    var id = this.boxes.length;
    this.boxes.push(new bookmarkBox( id, link,name, color, this));
  }

  hideBoxes(){
    console.log(this.boxes);
    this.boxes.forEach( function (box){
      box.hide();
    });
  }

  showBoxes(){
    this.boxes.forEach( function (box){
      box.show();
    });
  }

  removeBox(id){
    this.boxes[id].deleteBox();
    delete this.boxes[id];
  }

}
