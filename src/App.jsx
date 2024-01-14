import { Component } from 'react';
import { Controls } from './components/Controls';
import { Screen } from "./components/Screen";
import ZingTouch from 'zingtouch';


export class App extends Component{
  constructor(){
    super();
    this.state={
        homeList:["Cover Flow","Music","Games","Settings"],
        musicMenu:["All Songs","Artists","Albums"],
        activePage:"Home",
        activeItem:"Cover Flow",
        enter:0
      }
  }

  onRotate(){

    var containerElement = document.getElementById('controls-outer');
    var activeRegion = new ZingTouch.Region(containerElement);
    var change = 0;
    var self = this;
    if(self.state.enter < 2){
      activeRegion.bind(containerElement,'rotate', function(event){
	//Perform Operations
       // console.log(event.details);
        var newAngle = event.detail.distanceFromLast;
        
        if(newAngle < 0){
          console.log(change);
          change++;
          if(change === 15){
              console.log("change state");
              change = 0;
              if(self.state.activePage === 'Home'){
                  if(self.state.activeItem === 'Cover Flow'){
                      self.setState({
                          activeItem : "Music"
                      })
                  }else if(self.state.activeItem === 'Music'){
                      self.setState({
                          activeItem : "Games"
                      })
                  }else if(self.state.activeItem === 'Games'){
                      self.setState({
                          activeItem : "Settings"
                      })
                  }else if(self.state.activeItem === 'Settings'){
                      self.setState({
                          activeItem : "Cover Flow"
                      })
                  }
              }else if(self.state.activePage === 'Music'){
                  if(self.state.activeItem === 'All Songs'){
                      self.setState({
                          activeItem : "Artists"
                      })
                  }else if(self.state.activeItem === 'Artists'){
                      self.setState({
                          activeItem : "Albums"
                      })
                  }
              }
          }
      }else{
          console.log(change);
          change++;
          if(change === 15){
              console.log("change state");
              change = 0;
              if(self.state.activePage === 'Home'){
                  if(self.state.activeItem === 'Cover Flow'){
                      self.setState({
                          activeItem : "Settings"
                      })
                  }else if(self.state.activeItem === 'Music'){
                      self.setState({
                          activeItem : "Cover Flow"
                      })
                  }else if(self.state.activeItem === 'Games'){
                      self.setState({
                          activeItem : "Music"
                      })
                  }else if(self.state.activeItem === 'Settings'){
                      self.setState({
                          activeItem : "Games"
                      })
                  }
              }else if(self.state.activePage === 'Music'){
                  if(self.state.activeItem === 'All Songs'){
                      self.setState({
                          activeItem : "Albums"
                      })
                  }else if(self.state.activeItem === 'Albums'){
                      self.setState({
                          activeItem : "Artists"
                      })
                  }
                  else if(self.state.activeItem === 'Artists'){
                    self.setState({
                        activeItem : "All Songs"
                    })
                }
              }
          }
      }
    });
}else{
  console.log("Not allowed to enter")
  }

  }

  onSelect(){
      let actviepage = this.state.activeItem;
      let actItem = "";
      if(this.state.activeItem ==="Music")
      {
        actItem="All Songs";
      }
      else if(this.state.activeItem==="Home")
      {
        actItem="C";
      }
      this.setState({
        activePage:actviepage,
        activeItem:actItem
      })
  }

  render()
  {
      return (
        <>
          <Screen state={this.state}/>
          <Controls onRotate={this.onRotate.bind(this)} onSelect={this.onSelect.bind(this)}/>
        </>
      )
  }
}

export default App
