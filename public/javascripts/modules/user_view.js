
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
    this.jsonString = ""
  }

  newTab(name){
    this.tabs.push(new Tab(name));
    this.toJSON();
  }

  removeTab(name){
    delete this.tabs[name];
  }

  // This will take the current user's layout and convert it into JSON
  toJSON(){
    this.jsonString = JSON.stringify(this.tabs, this.getCircularReplacer());
    console.log(this.jsonString);
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
