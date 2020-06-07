// Prototype/top level object of each box in the webpage

export default class AbstractBox{

  constructor(id, slot, width, height, tab){
    this.id = id;
    this.slot = slot;
    this.width = width;
    this.height = height;
    this.tab = tab;

  }
  // update location in the page
  updateSlot(newSlot){
    this.slot = newSlot;
  }

  // update the size of the box on the page
  updateSize(width, height){
    this.width = width;
    this.height = height;
  }


  deleteBox() {
    var slotHTML = document.getElementById(this.slot);
    $(slotHTML).remove();
    event.stopPropagation();
  }

  hide(){
    console.log("hiding " + this.slot);
    document.getElementById(this.slot).style.display = "none";
  }

  show(){
    document.getElementById(this.slot).style.display = "block";
  }
}
