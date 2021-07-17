
import React from 'react'
import './center_panel.css'
import CardList from './card_list/card_list';
import axios from 'axios';


class Center_panel extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:[]
        }
    }

    componentDidMount(){
        axios.get('/huyapenta/100')
            .then((res)=>{
                console.log('ressss',res)
                this.setState({
                    list:res.data.result
                })
                console.log(this.state)
            })
    }

    render (){
        let renderList 
        renderList = this.state.list.map((item,index)=>{
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