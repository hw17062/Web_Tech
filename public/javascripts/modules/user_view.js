
import Tab from "./tab.js";

// Code for a new tab
//
// document.getElementById("tabName").innerHTML = currentTab;
// $('<button>'+currentTab+'</button>')
//     .attr('id', 'tab' + currentTab)
//     .attr('class', 'tab')
//     .click(function () {changeTab("Home")})
//     .appendTo('#mySidenav');


export default class user_view{
  constructor(){
    this.tabs = []
    this.jsonString = '';
  }

  newTab(name){
    console.log(this.tabs);
    var nameCounter = 0;
    var tmpName = name;
      for (var i = 0; i < this.tabs.length; i++){
        if (this.tabs[i].name == tmpName) {
          nameCounter++;
          tmpName = name + nameCounter;
        }
      }

    name = tmpName;
    this.tabs.push(new Tab(name, this));

    $('<button>'+name+'</button>')
        .attr('id', 'tab' + name)
        .attr('class', 'tab')
        .click(function () {changeTab(name);})
        .appendTo('#mySidenav');

    var tabHTML = document.getElementById('tab' + name);
    $('<button>X</button>')
        .attr('class', 'tabClose')
        .attr('id','closeTab'+ name)
        .appendTo(tabHTML);

    var closeBtn = document.getElementById('closeTab' + name);
    var self = this;
    $(closeBtn).click(function (){self.removeTab(name, self)});

    this.updateJSON();
  }

  removeTab(name, self){
    for (var i = 0; i < self.tabs.length; i++){
      if (self.tabs[i].name == name )self.tabs.splice(i, 1);
    }
    var tabHTML = document.getElementById('tab' + name);
    $(tabHTML).remove();
    self.updateJSON();
  }

  removeBox(){
    this.updateJSON();
  }

  buildFromJSON(string){
    this.jsonString = string;

    if(this.jsonString != '' && JSON.stringify(this.jsonString) != '"[null]"'){
      try{
        var allObj = JSON.parse(this.jsonString);
        console.log("building from JSON with " + JSON.stringify(this.jsonString));
        for (var tab = 0; tab < allObj.length; tab++){
          this.newTab(allObj[tab].name)
          for(var box = 0; box < allObj[tab].boxes.length; box++){
            this.tabs[tab].createBox(allObj[tab].boxes[box].link, allObj[tab].boxes[box].name, allObj[tab].boxes[box].color);
          }
        }
      }
      catch{
        this.newTab("My First Tab");
      }
    }
    else{
      this.newTab("My First Tab");
    }
  }

  // This will take the current user's layout and convert it into JSON
  updateJSON(){
    this.jsonString = JSON.stringify(this.tabs, this.getCircularReplacer());
    const Http = new XMLHttpRequest();
    const url='/updateView';
    Http.open("POST", url);
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(this.jsonString);
  }

  getCircularReplacer(){
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if(key == "view"){
        return;
      }
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
}
