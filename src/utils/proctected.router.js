import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import auth from '../auth/auth'
const ProctectedRoute = ({ component: Component, ...rest }) => {
  console.log('登陆状态验证', auth.isAnthenticated())
  return (
    <Route {...rest} render={(props) => {
      if (auth.isAnthenticated()) {
        return <Component {...props} />
      } else {
        return (<Redirect to={{
          pathname: '/login',
          state: {
            from: props.location
          }
        }}></Redirect>)

      }

    }}></Route>
  )
}

export default ProctectedRoute