/**
 * Created by Administrator on 2018/2/14.
 */
import React from 'react'
import {Row,Col} from 'antd'

export default class Footer extends React.Component{
    render(){
        return(
            <footer>
                <Row>
                    <Col span={2} />
                    <Col span={20} class="footer">
                        <div className="footer">
                            <p><a href="#">网站简介</a><i>|</i><a href="#">网站公告</a><i>|</i> <a href="#">招纳贤士</a><i>|</i><a href="#">联系我们</a><i>|</i><span class="phone">客服热线：400-123-1234</span></p>
                            <p>Copyright &copy; 2006 - 2018 版权所有&nbsp;&nbsp;&nbsp;苏ICP备00000912号&nbsp;&nbsp;&nbsp;苏ICP证A1034-8900号&nbsp;&nbsp;&nbsp;某市公安局XX分局备案编号：1234567890</p>
                        </div>
                    </Col>
                    <Col span={2} />
                </Row>
            </footer>
        )
    }
}