import './App.css'


import Login from './component/login/index'
import Layout from './layout/index'
import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'

import ProctectedRoute from './utils/proctected.router'
function App() {
  return (
    <>
    <div className='app'>
      <HashRouter>
        <ProctectedRoute exact path="/hylist" component={Layout} />
        <ProctectedRoute exact path="/dylist" component={Layout} />
        <ProctectedRoute exact path="/" component={Layout} />
        {/* <Route exact path='/' >
          <Header></Header>
          <Homepage></Homepage>
        </Route> */}
        <Route exact path='/login' component={Login} />
          
      </HashRouter>
    </div>
    </>
  );
}

export default App;
