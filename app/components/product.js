/**产品展示块
 * Created by Administrator on 2018/2/18.
 */
import React from 'react'
import { Card,List, Avatar,Row,Col } from 'antd';
import '../static/css/product.css'
const { Meta } = Card;
const data = [
    {
        title: '天天新闻',
        avatar:'./app/static/images/logo.png',
        description:'新闻首页 免费邮 直播',
        href:'https://tiantian2000.github.io/react-news'
    },
    {
        title: '天天博客',
        avatar:'./app/static/images/blog.png',
        description:'每日微博 ios下载 android下载',
        href:'https://tiantian2000.github.io/vue-blog/'
    },
    {
        title: '天天电影',
        avatar:'./app/static/images/movie.png',
        description:'电影资讯 ios下载 android下载',
        href:'https://tiantian2000.github.io/vue-movie'
    },
    {
        title: '天天音乐',
        avatar:'./app/static/images/music.png',
        description:'新歌速递 ios下载 android下载',
        href:'https://tiantian2000.github.io/vue-music'
    },
    {
        title: '天天点评',
        avatar:'./app/static/images/sell.png',
        description:'人气美食 休闲娱乐 生活服务',
        href:'javascript:void(0)'
    },
];
export default class Product extends React.Component{
    render(){
        return(
            <div>
                     <List
                         bordered="true"
                         size="small"
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href} target="_blank">{item.title}</a>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                <div >
                    <Card>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card
                                    style={{width:70}}
                                    hoverable
                                    cover={<img alt="example" src="./app/static/images/train.png" />}
                                >
                                    <Meta
                                        title="火车票"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{width:70}}
                                    cover={<img alt="example" src="./app/static/images/weather.png" />}
                                >
                                    <Meta
                                        title="天气预报"
                                    />
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card
                                    hoverable
                                    style={{width:70}}
                                    cover={<img alt="example" src="./app/static/images/air.png" />}
                                >
                                    <Meta
                                        title="航空查询"
                                    />
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 270 }}
                        cover={<img alt="example" src="./app/static/images/hongbao.jpg" />}
                    >
                        <Meta
                            title="点石成金"
                        />
                    </Card>
                </div>
            </div>
        )
    }
}