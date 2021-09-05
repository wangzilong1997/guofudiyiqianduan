import React from 'react';
import './card_list.css';
import { transformtime } from '../../../../utils/utils';
import axios from 'axios';
import qs from 'qs';

import kiss from '../../../../asset/card/kiss.svg'
import amazed from '../../../../asset/card/amazed.svg'
import scared from '../../../../asset/card/scared.svg'
// import CardItem from '../components/CardItem/index.tsx';
class Card_list extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            time: '',
            views:'',
            likes:'',
            unlikes:''
        }
    }
    componentDidMount(){
        this.setState({
            time: transformtime(new Date(this.props.data.time))
        })
        this.setState({
            views:this.props.data.views || 0,
            likes:this.props.data.likes || 0,
            unlikes:this.props.data.unlikes || 0,
        })
    }
    // 浏览
    cardClick = () => {
        axios.post('/api/relation/view',qs.stringify({ pentaid: this.props.data.pentaid }))
            .then((res)=>{
                console.log('ressss',res)
            })
            this.setState({
                views:this.state.views +1
            })
        
    }

    // 喜欢
    // 浏览
    likeClick = () => {
        axios.post('/api/relation/like',qs.stringify({ pentaid: this.props.data.pentaid }))
            .then((res)=>{
                console.log('ressss',res)
            })
            this.setState({
                likes:this.state.likes +1
            })
        
    }

    // 不喜欢
    // 浏览
    unlikeClick = () => {
        axios.post('/api/relation/unlike',qs.stringify({ pentaid: this.props.data.pentaid }))
            .then((res)=>{
                console.log('ressss',res)
            })
            this.setState({
                unlikes:this.state.unlikes +1
            })
        
    }
    render(){
        return(
            <>
                <div className="card">
                    <div className={(this.state.likes === 0 
                        && this.state.unlikes === 0 ) ? "card_container"
                        : (this.state.likes >= this.state.unlikes) ? "card_container likes" : "card_container unlikes"
                        }>
                        <div className={(this.state.likes === 0 
                        && this.state.unlikes === 0 ) ? "card_id"
                        : (this.state.likes >= this.state.unlikes) ? "card_id likes" : "card_id unlikes"
                        }>{this.props.data.pentaid}</div>
                        <div className="card_views">{this.state.views}</div>
                        <div className="card_img" onClick={this.cardClick}> 
                            <a href={this.props.data.url} target="_blank" rel="noopener noreferrer">
                                <img src={this.props.data.imgurl} alt="图片路径" width="290px" height="200px"/>
                            </a>
                            
                        </div>
                        <div className="card_title Singlelineellipsis">
                            {
                                this.props.data.title
                            }
                        </div>
                        <div className="card_aurthorandtime ">
                            <div className='card_aurthorandtime_author Singlelineellipsis'>
                                {
                                    this.props.data.author
                                }
                            </div>
                            <div className='card_aurthorandtime_time Singlelineellipsis'>
                                {
                                    this.state.time
                                }
                            </div>
                        </div>
                        <div className="card_bottom">
                            <button className="card_bottom_item" onClick={this.likeClick}>
                                <img src={kiss} width='20px' height="20px" alt="喜欢"></img>    喜欢{this.state.likes || 0}
                            </button>
                            <button className="card_bottom_item" onClick={this.unlikeClick}>
                                <img src={scared} width='20px' height="20px" alt="不喜欢"></img> 不喜欢{this.state.unlikes || 0}
                            </button>
                            <button className="card_bottom_item" onClick={this.cardClick}>
                                <img src={amazed} width='20px' height="20px" alt="浏览量"></img> 浏览量{this.state.views || 0}
                            </button>
                        </div>
                    </div>
                    
                </div>
                
                {/* <CardItem></CardItem> */}
            </>

        )
    }
}

export default Card_list;