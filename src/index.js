import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import {BrowserRouter,Route} from 'react-router-dom';

 // eslint-disable-next-line
ReactDOM.render(
  <BrowserRouter>
  <div>
  <Route exact path='/' component={App}/>
  <Route path='/page1' component={Page1}/>
  <Route path='/page2' component={Page2}/>
  <Route path='/page3' component={Page3}/>

    </div>
  </BrowserRouter>,document.getElementById('root')
);
