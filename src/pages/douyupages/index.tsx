import React from 'react'
import Header from '@/component/header/index'
import Homepage from './components/home_page'

const DouyuPages = (props) => {
  return <>
          <Header />
          {/* <Elevator props={props}/> */}
          <Homepage props={props} type='douyu'/>
         </>
}
export default DouyuPages