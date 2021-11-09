import React from 'react'
import './left_panel.css'
import Elevator from './components/elevator';
class Left_panel extends React.Component {
    constructor(props){
      super(props)
      const { realprops } = props
      this.props = realprops
    }
    componentDidMount(){
      console.log('left_paned.props',this.props)
    }
    render (){
        return (
            <div  className='Left_panel'>
                <Elevator props={this.props}/>
            </div>
        )
    }
}

export default Left_panel;