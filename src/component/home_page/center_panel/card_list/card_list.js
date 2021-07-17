import React from 'react';
import './card_list.css';
import { transformtime } from '../../../../utils/utils';
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
    render(){
        return(
            <div className="card_container">
                
                <div className="card_img"> 
                    <a href={this.props.data.url} target="_blank" rel="noopener noreferrer">
                        <img src={this.props.data.imgurl} alt="图片路径" width="290px" height="200px"/>
                    </a>
                    
                </div>
                <div className="card_title">
                    {
                        this.props.data.title
                    }
                </div>
                <div className="card_aurthorandtime">
                    <div>
                        {
                            this.props.data.author
                        }
                    </div>
                    <div>
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