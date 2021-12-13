
import React from 'react'
import './center_panel.css'
import CardList from './card_list/card_list';
import axios from 'axios';
import { debounce } from '../../../utils/utils'


class Center_panel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      updateLength: null
    }
  }
  componentDidMount() {
    // penta/common/1/dy/2122
    axios.get('/penta/common/1/hy/' + window.localStorage.getItem('userid'))
      .then((res) => {
        console.log('ressss', res)
        this.setState({
          list: res.data.result
        })
        console.log(this.state)
      })
    window.addEventListener('scroll', debounce(this.scrollHandle, 200))
  }
  getdata = (e) => {
    axios.get(`/penta/common/${e}/hy/` + window.localStorage.getItem('userid'))
      .then((res) => {
        console.log('ressss', res)
        this.setState({
          list: res.data.result
        })
        console.log(this.state)
      })
  }
  scrollHandle = (e) => {

    var top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
    console.log(top)
    let datalength = Math.floor(top / 600)
    console.log(datalength)
    if (datalength > +this.state.updateLength) {
      this.setState({
        updateLength: datalength
      })
      console.log('数据是否会更新')
      this.getdata(datalength)
    }




  }

  render() {
    let renderList
    renderList = this.state.list.map((item, index) => {
      return (
        <CardList data={item} key={item.pentaid}></CardList>
      )
    })
    return (
      <div className='Center_panel'>

        {renderList}

      </div>

    )
  }
}

export default Center_panel;