import React from "react";
import styles from './index.less';

import LeftPanel from "./left_panel/left_panel";
import CenterPanel from "./center_panel/center_panel";

class Homepage extends React.Component {
    constructor(props){
      super(props)
      this.props = props
    }
    componentDidMount(){
      console.log('homepage.props',this.props)
    }
    render(){
        return (
            <div>
                <div className='fix_bg'></div> 
                <div className={styles.home_container}>
                    <div className={styles.home_content}>
                        <LeftPanel props={this.props}></LeftPanel>
                        <CenterPanel></CenterPanel>
                    </div>
                </div>    
            </div>    
        )
    }
}

export default Homepage