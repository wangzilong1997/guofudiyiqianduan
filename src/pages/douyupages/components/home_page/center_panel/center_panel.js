
import React from 'react'
import './center_panel.css'
import CardList from './card_list/card_list';
import axios from 'axios';
import { debounce } from '../../../../../utils/utils'


class Center_panel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:[],
            updateLength:null
        }
    }
    componentDidMount(){
        axios.get('/api/douyupenta/1')
            .then((res)=>{
                console.log('ressss',res)
                this.setState({
                    list:res.data.result
                })
                console.log(this.state)
            })
            window.addEventListener('scroll', debounce(this.scrollHandle,200))
    }
    getdata = (e) => {
        axios.get(`/api/douyupenta/${e}`)
            .then((res)=>{
                console.log('ressss',res)
                this.setState({
                    list:res.data.result
                })
                console.log(this.state)
            })
    }
    scrollHandle = (e) => {
            var top = e.srcElement.scrollingElement.scrollTop;    // 获取页面滚动高度
            console.log(top)
            let datalength = Math.floor(top/600)
            console.log(datalength)
            if(datalength > +this.state.updateLength){
                this.setState({
                    updateLength: datalength
                })
                console.log('数据是否会更新')
                this.getdata(datalength)
            }
    }

    render (){
        let renderList 
        renderList = this.state.list.map((item,index)=>{
            item.url = 'https://v.douyu.com/show/' + item.url
            return(
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