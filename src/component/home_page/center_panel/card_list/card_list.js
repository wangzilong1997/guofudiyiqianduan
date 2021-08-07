import React from 'react';
import './card_list.css';
import { transformtime } from '../../../../utils/utils';
import axios from 'axios';
import qs from 'qs';
class Card_list extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            time: ''
        }
    }
    componentDidMount(){
        this.setState({
            time: transformtime(new Date(this.props.data.time))
        })
    }
    cardClick = () => {
        axios.post('/api/hyrelation',qs.stringify({ pentaid: this.props.data.pentaid }))
            .then((res)=>{
                console.log('ressss',res)
            })
    }
    render(){
        return(
            <div className="card_container" onClick={this.cardClick}>
                <div className="card_id">{this.props.data.pentaid}</div>
                <div className="card_views">{this.props.data.views}</div>
                <div className="card_img"> 
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
                
                
            </div>
        )
    }
}

export default Card_list;