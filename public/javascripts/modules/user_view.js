
import Tab from "./tab.js";
import Cookies from './js.cookie.js'

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
    var nameCounter = 0;
    for (var i = i; i < this.tabs.length; i++){
      if (this.tabs[i].name == name) nameCounter++;
    }

    if (nameCounter > 0){
      name += nameCounter;
    }
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
    $(closeBtn).click(function () {
      self.removeTab(name);
    });

    this.updateJSON();
  }

  removeTab(name){
    delete this.tabs[name];
    this.updateJSON();
  }

  removeBox(){
    this.updateJSON();
  }

  buildFromJSON(string){
    this.jsonString = string;

    if(this.jsonString != ''){
      var allObj = JSON.parse(this.jsonString);
      for (var tab = 0; tab < allObj.length; tab++){
        this.newTab(allObj[tab].name)
        for(var box = 0; box < allObj[tab].boxes.length; box++){
          this.tabs[tab].createBox(allObj[tab].boxes[box].link, allObj[tab].boxes[box].name, allObj[tab].boxes[box].color);
        }
      }
    }
    else{
      this.newTab("My First Tab");
    }
  }

  // This will take the current user's layout and convert it into JSON
  updateJSON(){
    this.jsonString = JSON.stringify(this.tabs, this.getCircularReplacer());
    Cookies.set("view",this.jsonString, {expires: 1, SameSite: 'Lax', secure:true});
    const Http = new XMLHttpRequest();
    const url='/updateView';
    Http.open("POST", url);
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
