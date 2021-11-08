import './App.css'


import Login from './component/login/index'
import Layout from './layout/index'
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import ProctectedRoute from './utils/proctected.router'
function App() {
  return (
    <>
    <div className='app'>
      <BrowserRouter>
        <ProctectedRoute exact path="/" component={Layout} />
        {/* <Route exact path='/' >
          <Header></Header>
          <Homepage></Homepage>
        </Route> */}
        <Route exact path='/login' component={Login} />
          
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
