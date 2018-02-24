/**
 * Created by Administrator on 2018/2/18.
 */
import React from 'react'
import { Card,List, Avatar,Row,Col,Divider  } from 'antd';
import '../static/css/product.css'
const { Meta } = Card;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
export default class Product extends React.Component {
    render() {
        return (
            <div className="product_all">
                <Card title="免费邮 VIP邮箱 企业邮箱" className="title">
                    <div>
                        <Divider type="vertical" />
                        <a href="#">新闻客户端</a>&nbsp;
                        <a href="#">网易红彩</a>
                    </div>
                    <ul className="product_item_one">
                       <li>理财</li>
                       <li>赚钱</li>
                       <li>贵金属</li>
                       <li>车险</li>
                       <li>有钱</li>
                       <li>众筹</li>
                       <li>彩票</li>
                       <li>火车票</li>
                       <li>严选</li>
                       <li>网易味央</li>
                       <li>商城</li>
                       <li>考拉海购</li>
                       <li>公正邮</li>
                       <li>青果</li>
                       <li>网易智造</li>
                       <li>印象派</li>
                    </ul>
                    <Divider />
                    <div>
                        <Divider type="vertical" />
                        <a href="#">薄荷直播</a>&nbsp;
                        <a href="#">公开课</a>&nbsp;
                        <a href="#">跟贴</a>
                    </div>
                    <ul className="product_item_one">
                        <li>网易美学</li>
                        <li>漫画</li>
                        <li>读小说</li>
                        <li>美聊</li>
                        <li>约会</li>
                        <li>CC语音</li>
                        <li>花田</li>
                        <li>LOFTER</li>
                        <li>相册</li>
                        <li>有道词典</li>
                        <li>翻译</li>
                        <li>云笔记</li>
                        <li>云课堂</li>
                        <li>MOOC</li>
                    </ul>
                    <Divider />
                    <div>
                        <Divider type="vertical" />
                        <a href="#">梦幻西游</a>&nbsp;
                        <a href="#">新大话2</a>&nbsp;
                        <a href="#">Sky光遇</a>
                    </div>
                    <ul className="product_item_one">
                        <li>新大话3</li>
                        <li>魔兽世界</li>
                        <li>倩女幽魂</li>
                        <li>武魂2</li>
                        <li>大话西游</li>
                        <li>守望先锋</li>
                        <li>天下3</li>
                        <li>率士之滨</li>
                        <li>大唐无双</li>
                        <li>零天谕</li>
                        <li>阴阳师</li>
                        <li>镇魔曲</li>
                        <li>炉石传说</li>
                    </ul>
                </Card>
            </div>
        )
    }
}