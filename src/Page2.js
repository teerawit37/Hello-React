import React, { Component } from 'react';
import Header from './Header';
class Page2 extends Component{
  render(){
    return(
      <div>
        <Header/>
        <h1>Page2</h1>
        <h2><a href="/">Home</a></h2>
      </div>
    );
  }
}
export default Page2;
