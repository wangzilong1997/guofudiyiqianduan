import './App.css'


import Login from './component/login/index'

import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import PentaPage from './pages/pentaPage'

import ProctectedRoute from './utils/proctected.router'
function App() {
  return (
    <>
      <div className='app'>
        <HashRouter>
          <ProctectedRoute exact path="/pentakill" component={PentaPage} />
          <ProctectedRoute exact path="/" component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Login} />

        </HashRouter>
      </div>
    </>
  );
}

export default App;
