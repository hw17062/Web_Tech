
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
  }

  newTab(name){
    this.tabs.push(new Tab(name));
  }

  removeTab(name){
    delete this.tabs[name];
  }
}
