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

  // remove selected box, then update the array to fill the gap
  removeBox(id){
    this.boxes[id].deleteBox();
    delete this.boxes[id];
    for(var i = id+1; i < this.boxes.length; i++){
      this.boxes[i - 1] = new bookmarkBox(i - 1, this.boxes[i].link, this.boxes[i].name, this.boxes[i].color, this);
    }
    this.boxes[this.boxes.length - 1].deleteBox();
    this.boxes.pop();

  }

}
