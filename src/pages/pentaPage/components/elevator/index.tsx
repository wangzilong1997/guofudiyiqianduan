import React, { useEffect, useState } from 'react'
import styles from './index.less';

interface IElevator {
  dataList: Array<{
    id: number;
    name: string;
    value: string;
  }>
  curIndex: number,
  callBack: Function,
}

const Elevator: React.FC<IElevator> = (props) => {

  const { dataList, curIndex, callBack } = props
  const [selectid, setSelectid] = useState(curIndex)

  const itemClick = (item, index) => {
    setSelectid(index)
    callBack(item.name)
  }

  return (
    <div className={styles.elevator}>
      {
        dataList.map((item, index) => {
          return <div className={index === selectid ? styles.elevator_items_select : styles.elevator_items}
            onClick={() => itemClick(item, index)}>
            {item.value}
          </div>
        })
      }
    </div>
  )
}

export default Elevator