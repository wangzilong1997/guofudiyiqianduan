import './App.css'


import Login from './component/login/index'
import Layout from './layout/index'
import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import DouyuPages from './pages/douyupages'
import PentaPage from './pages/pentaPage'

import ProctectedRoute from './utils/proctected.router'
function App() {
  return (
    <>
      <div className='app'>
        <HashRouter>
          <ProctectedRoute exact path="/hylist" component={Layout} />
          <ProctectedRoute exact path="/dylist" component={DouyuPages} />
          <ProctectedRoute exact path="/pentaKill" component={PentaPage} />
          <ProctectedRoute exact path="/" component={Login} />
          {/* <Route exact path='/' >
          <Header></Header>
          <Homepage></Homepage>
        </Route> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Login} />

        </HashRouter>
      </div>
    </>
  );
}

export default App;
