import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Body from './component/body.jsx';
import Create from './component/create.jsx';
import Home from './component/home.jsx';
import View from './component/view.jsx';
import List from './component/list.jsx';
import './App.css';

import image from '../src/img/catering.png';
import image2 from '../src/img/images.png';

class App extends Component {
  render() {
    return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
            <img src={image} alt="image" className="img"/>
              <p>Hi! Admin</p>
              <img src={image2} alt="image" className="profile"/>
            <div className="logo">
                <div className="branch"></div>
                  <span>FasterFood ®</span>
            </div>
        </header>
        
        <body>
          <div className="side-nav">
            <div className="logo1">
				      <span>ADMIN PANEL</span>
			      </div>
			      <nav>
              <ul>
              <li>
                    <NavLink to='/Home'>
                    <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Body'>
                    <span>Add Food Item</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/View'>
                      <span>View / Update Item</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/Create'>
                      <span>Create Order</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/List'>
                      <span>List of Orders</span>
                    </NavLink>
                </li>
              </ul>
                  <div className='content'>
                    <Route exact path="/Home" component={Home}/>
                    <Route path="/Body" component={Body}/>
                    <Route path="/View" component={View}/>
                    <Route path="/Create" component={Create}/>
                    <Route path="/List" component={List}/>
                  </div>
			        </nav>
              
		      </div>
        </body>

        <footer>
            <h5>
            Copyright © 2019 <br/>
            FasterFood  ®
            </h5>
        </footer>
		  </div>
    </HashRouter>
    );
  }
}

export default App;
