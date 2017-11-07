import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'
import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter, Switch, HashRouter } from 'react-router-dom';


//Brower history
// ReactDOM.render((
//   <BrowserRouter>
//     <Switch>
//     	<Route exact path="/" component={HomePage}/>
//     	<Route exact path="/Login" component={LoginPage}/>
//     </Switch>
//   </BrowserRouter>
// ), document.getElementById('root'));

//Hash history
ReactDOM.render((
  <HashRouter>
  	<Switch>
    	<Route exact path="/" component={HomePage}/>
    	<Route path="/Login" component={LoginPage}/>
    </Switch>
  </HashRouter>
), document.getElementById('root'));

// ReactDOM.render(<HomePage />, document.getElementById('root'));
registerServiceWorker();
