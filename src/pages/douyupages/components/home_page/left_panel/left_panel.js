import React from 'react'
import './left_panel.css'
import Elevator from './components/elevator';
class Left_panel extends React.Component {
    constructor(props){
      super(props)
      console.log("left_penel",props)
      this.props = props
    }
    componentDidMount(){
      console.log('left_paned.props',this.props)
    }
    render (){
        return (
            <div  className='Left_panel'>
                <Elevator props={this.props.props.props}/>
            </div>
        )
    }
}

export default Left_panel;