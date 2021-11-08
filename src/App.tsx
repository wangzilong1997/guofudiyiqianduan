import './App.css'
import Header from './component/header/index'
import Homepage from './component/home_page'

import Login from './component/login/index'

import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
    <div className='app'>
      <BrowserRouter>
        <Route path='/index' >
          <Header></Header>
          <Homepage></Homepage>
        </Route>
        <Route  path='/login' >
          <Login />
          {/* <Header></Header> */}
        </Route>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
