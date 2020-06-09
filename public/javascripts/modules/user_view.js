
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
    var saved_view = Cookies.get("view");
    this.jsonString = ""
    if (saved_view != undefined){
      this.jsonString = saved_view;
      console.log(this.jsonString);
      this.buildFromJSON();
    }
    else{
      this.newTab("My First Tab");
    }
  }

  newTab(name){
    this.tabs.push(new Tab(name));
    $('<button>'+name+'</button>')
        .attr('id', 'tab' + name)
        .attr('class', 'tab')
        .click(function () {changeTab(name);})
        .appendTo('#mySidenav');
    this.updateJSON
  }

  removeTab(name){
    delete this.tabs[name];
  }

  buildFromJSON(){
    var allObj = JSON.parse(this.jsonString);
    for (var tab = 0; tab < allObj.length; tab++){
      this.newTab(allObj[tab].name)
      for(var box = 0; box < allObj[tab].boxes.length; box++){
        this.tabs[tab].createBox(allObj[tab].boxes[box].link, allObj[tab].boxes[box].name, allObj[tab].boxes[box].color);
      }
    }
  }

  // This will take the current user's layout and convert it into JSON
  updateJSON(){
    this.jsonString = JSON.stringify(this.tabs, this.getCircularReplacer());
    Cookies.set("view",this.jsonString, {expires: 7, SameSite: 'Lax', secure:true});
  }

  getCircularReplacer(){
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};
}
