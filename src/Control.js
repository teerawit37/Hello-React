import React, { Component } from 'react';
class Control extends Component{
  constructor(){
    super();
    this.state={
      name:"Unlike",
      count:0
    };
  }
  render(){
    setTimeout(()=>{
      this.setState({name:"Like"});
    },2000);
    setInterval(()=>{
      this.setState({count:this.state.count});
    },100);
    //this.setState({count:this.state.count+1});
    return(
      <div>
        <h1>Teerawit Studio</h1>
        <h2>{this.state.name}</h2>
        <h2>{this.state.count}</h2>
      </div>
    );
  }
}
export default Control;
