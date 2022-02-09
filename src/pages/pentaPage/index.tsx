import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Header from '@/component/header/index'
import Homepage from './components/home_page'

import styles from './index.less';

import Elevator from './components/elevator'

import Card from './components/card'

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
  var maxLength = 0

  useEffect(() => {
    window.addEventListener('scroll', debounce(scrollHandle, 200))
    axios.get(`/penta/common/1/${type}/` + window.localStorage.getItem('userid'))
      .then((res) => {
        console.log('ressss', res)
        setList(res.data.result)
      })
  }, [])
  useEffect(() => {
    window.addEventListener('scroll', debounce(scrollHandle, 200))
    axios.get(`/penta/common/1/${type}/` + window.localStorage.getItem('userid'))
      .then((res) => {
        console.log('ressss', res)
        setList(res.data.result)
      })
  }, [type])

  var scrollHandle = (e) => {
    var top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
    let datalength = Math.floor(top / 600)
    console.log(datalength, maxLength)
    if (datalength > maxLength) {
      maxLength = datalength
      getdata(datalength)
    }
  }
  var getdata = (e) => {
    axios.get(`/penta/common/${e}/${type}/` + window.localStorage.getItem('userid'))
      .then((res) => {
        console.log('ressss', res)
        setList(res.data.result)
      })
  }
  return <>
    <Header />
    {/* 背景图 */}
    <div className='fix_bg'></div>

    <div className={styles.content}>
      <div className={styles.left}>
        <Elevator dataList={elevatorList} curIndex={0} callBack={setType} />
      </div>
      <div className={styles.right}>
        {
          list.map(item => {
            item.url = 'https://v.douyu.com/show/' + item.url
            return (
              <Card data={item} key={item.pentaid}></Card>
            )
          })
        }
      </div>
    </div>

    {/* <Homepage props={props} type='douyu' /> */}
  </>
}
export default PentaPage
