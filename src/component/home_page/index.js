import React from "react";
import './index.css';

import LeftPanel from "./left_panel/left_panel";
import CenterPanel from "./center_panel/center_panel";

class Homepage extends React.Component {
    render(){
        return (
            <div>
                <div className='fix_bg'></div> 
                <div className='home_container'>
                    <div className='home-content'>
                        <LeftPanel></LeftPanel>
                        <CenterPanel></CenterPanel>
                        
                    </div>
                </div>    
            </div>    
        )
    }
}

export default Homepage