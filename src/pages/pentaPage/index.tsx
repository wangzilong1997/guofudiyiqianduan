import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
// 真是个好玩意啊
import { useScroll, useDebounce } from 'ahooks'

import Header from '@/component/header/index'
import styles from './index.less';
import Elevator from './components/elevator'
import PentaCard from './components/pentacard'
import { debounce } from '@/utils/utils'



const elevatorList = [{
  id: 0,
  name: 'hy',
  value: '虎牙五杀'
}, {
  id: 1,
  name: 'dy',
  value: '斗鱼五杀'
}]


const PentaPage: React.FC<any> = (props) => {
  // 基础渲染数据 
  const [list, setList] = useState([])
  // 数据类型
  const [type, setType] = useState('hy')
  // 是否更新数据
  const [maxLength, setMaxLength] = useState(0)

  useScroll(document, ({ top, left }) => {
    let length = Math.ceil(top / 600)
    if (length > maxLength) {
      setMaxLength(length)
      return true
    }
    return false
  });

  useEffect(() => {
    setMaxLength(1)
  }, [type])

  useEffect(() => {
    axios.get(`/penta/common/${maxLength}/${type}/` + window.localStorage.getItem('userid'))
      .then((res) => {
        console.log('ressss', res)
        setList(res.data.result)
      })
  }, [useDebounce(maxLength, {
    wait: 400
  }), type])

  return <>
    <Header />
    {/* 背景图 */}
    <div className='fix_bg'></div>

    <div className={styles.content} >
      <div className={styles.left}>
        <Elevator dataList={elevatorList} curIndex={0} callBack={setType} />
      </div>
      <div className={styles.right}>
        {
          list.map(item => {
            item.url = type == 'dy' ? 'https://v.douyu.com/show/' : '' + item.url
            return (
              <>
                <PentaCard data={item} key={item.pentaid} >
                </PentaCard>
              </>
            )
          })
        }
      </div>
    </div>

    {/* <Homepage props={props} type='douyu' /> */}
  </>
}
export default PentaPage
