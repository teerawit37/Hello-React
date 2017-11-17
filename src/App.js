import React, { Component } from 'react';
import Header from './Header';
import Control from './Control';
import Content from './Content';
import Footer from './Footer';
class App extends Component {
  constructor(){
    super();
    this.state={
      data:[],
      message:"UnLike",
      type:""
    };
    this.changeMessage = this.changeMessage.bind(this);
    this.insertData = this.insertData.bind(this);
  }
  changeMessage(){
     this.setState({message:"Like"});
  }
  insertData(){
    var item = "React";
    var myArray= this.state.data;
    myArray.push(item);
    this.setState({data:myArray});
  }
  changeText(event){
    this.setState({type:event.target.value});
  }
    render(){
      return(
        <div>
           <Header/>
           <Control/>
           <Content title="Course" name="Teerawit Studio" price="Free"/>
           <h1>{this.state.message}</h1>
           <button onClick={this.changeMessage}>{this.state.message}</button>
           <h1>{this.state.data}</h1>
           <button onClick={this.insertData}>insert</button><br/>
           <input type="text" onChange={this.changeText.bind(this)}></input>
           <h1>Welcome : {this.state.type}</h1>
           <h1>Teerawit</h1>
           <h2><a href="/page1">Page1</a></h2>
           <h2><a href="/page2">Page2</a></h2>
           <h2><a href="/page3">Page3</a></h2>
           <Footer/>
        </div>
      );
    }
}

export default App;
