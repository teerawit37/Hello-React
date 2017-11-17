import React, { Component } from 'react';
import styles from './App.css';
class Footer extends Component{
  render(){
    return(
      <div className={styles.fixedfooter}>
         <div className={styles.container}>
          CopyRight 2017 - Teerawit
         </div>
      </div>
    );
  }
}
export default Footer;
