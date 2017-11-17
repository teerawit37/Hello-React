import React, { Component } from 'react';
import styles from './App.css';
class Header extends Component{
  render(){
    return(
      <div className={styles.fixedheader}>
      <div className={styles.container}>
        <nav>
            <a href="/">Home</a>
            <a href="/page1">Page1</a>
            <a href="/page2">Page2</a>
            <a href="/page3">Page3</a>
        </nav>
    </div>

      </div>
    );
  }
}
export default Header;
