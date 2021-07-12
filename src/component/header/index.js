import React from 'react'
import './index.css'
import logo from '../../asset/logo.png'

class Header extends React.Component {
    render () {
        return (
            <div className='international-header'>
                <div className='my-header'>
                    <div className="my-ico">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="my-nav">
                        <div>
                            猪妖五杀
                        </div>
                    </div>
                    <div className="my-others">
                        <div>国</div>
                        <div>服</div>
                        <div>第</div>
                        <div>一</div>
                        <div>前</div>
                        <div>端</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header