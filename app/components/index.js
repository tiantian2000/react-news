/**
 * Created by Administrator on 2018/2/14.
 */
import React from 'react'
//引入antd样式
import 'antd/dist/antd.css';
import {BackTop} from 'antd';
import HeaderComponent from './header'
import FooterComponent from './footer'
import NewsContainerComponent from './news_container'

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <NewsContainerComponent />
                <FooterComponent/>
                <BackTop />
            </div>
        )
    }
}