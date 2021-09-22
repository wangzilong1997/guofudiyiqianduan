import React from "react";
import styles from './index.less';

import LeftPanel from "./left_panel/left_panel";
import CenterPanel from "./center_panel/center_panel";

class Homepage extends React.Component {
    render(){
        return (
            <div>
                <div className='fix_bg'></div> 
                <div className={styles.home_container}>
                    <div className={styles.home_content}>
                        <LeftPanel></LeftPanel>
                        <CenterPanel></CenterPanel>
                    </div>
                </div>    
            </div>    
        )
    }
}

export default Homepage