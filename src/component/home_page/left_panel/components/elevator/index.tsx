import React, { useState } from 'react'
import styles from './index.less';
const Elevator = (props) => {
  const [selectid,setSelectid] = useState(()=>{
    if(props.props.props.props.location.pathname === '/' || 
    props.props.props.props.location.pathname === '/hylist' ){
      return 0
    }else if(props.props.props.props.location.pathname === '/dylist'){
      return 1
    }
  })
  const list = [{
    id:'hy',
    value:'虎牙五杀'
  },{
    id:'dy',
    value:'斗鱼五杀'
  }]

  const itemClick = (item,index) =>{
    console.log(props)
    console.log('index',index)
    setSelectid(index)
    props.props.props.props.history.push('/' + item.id + 'list')
  }

  return (
    <div className={styles.elevator}>
      { 
        list.map((item,index) => {
          return <div className={index === selectid ? styles.elevator_items_select :styles.elevator_items} 
            onClick={() => itemClick(item,index)}>
              {item.value}
          </div>
        })
      }
    </div>
  )
}

export default Elevator