/*
 * @Author: 王子龙
 * @Date: 2021-07-12 14:08:14
 * @LastEditTime: 2022-03-20 19:44:36
 * @LastEditors: 王子龙
 * @Descripttion: 
 */
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
                        <div className='my-nav-item'
                            onClick={this.navItemClick}
                            >
                            猪妖五杀
                        </div>
                        <div className='my-nav-item'
                            onClick={this.navItemClick}
                            >
                            小张影院
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
    navItemClick(e){
      console.log(e)
    }
}

export default Header

