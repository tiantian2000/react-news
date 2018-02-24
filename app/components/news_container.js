/**整个新闻模块
 * Created by Administrator on 2018/2/18.
 */
import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import {Link} from 'react-router-dom'
import NewsBlockComponent from './news_block'
import NewsImageBlockComponent from './news_image_block'
import ProductComponent from './product'
import ProductAllComponent from './product_all'
import '../static/css/container.css';

const TabPane = Tabs.TabPane;

export default class NewsContainer extends React.Component{

    constructor(){
        super();
        this.state = {
            news: [
                {
                    thumbnail_pic_s02: './app/static/images/carousel1.jpg',
                    uniquekey: ''
                },
                {
                    thumbnail_pic_s02: './app/static/images/carousel2.jpg',
                    uniquekey: ''
                },
                {
                    thumbnail_pic_s02: './app/static/images/carousel3.jpg',
                    uniquekey: ''
                },
                {
                    thumbnail_pic_s02: './app/static/images/carousel4.jpg',
                    uniquekey: ''
                },
                {
                    thumbnail_pic_s02: './app/static/images/carousel5.jpg',
                    uniquekey: ''
                }
            ]
        }
    }

    componentWillMount(){
         var url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=5';
         console.log(url)
         var fetchOptions = {
            method:'GET'
         }
         fetch(url,fetchOptions).then(response=>response.json())
             .then(result=>{
             if(result.length){ //如果获取到头条新闻
                  this.setState({
                     news: result
                 })
             }
         })
     }

    render(){
        const settings = {
            dots:true,
            infinite:true,
            speed:500,
            autoplay:true,
            slidesToShow:1
        }


        return(
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="left_container">
                                <div className="carousel">
                                    <Carousel {...settings}>
                                        {
                                            this.state.news.length?
                                                this.state.news.map((item,index)=>{
                                                    return (
                                                        <div className="big-pic-wrapper" key={index}>
                                                            <Link to={{pathname:"/detail/"+
                                                            item.uniquekey,query:{type:'top'}}}>
                                                                <img src={item.thumbnail_pic_s02}/>
                                                            </Link>
                                                        </div>
                                                    )
                                            }):'<div><img src="./app/static/images/carousel1.png"/></div>'
                                        }
                                    </Carousel>
                                </div>
                            <div className="top_image_news">
                                <NewsImageBlockComponent count={6} type="guonei" width={122} height={140}
                                                         cardTitle="国内" totalWidth={400} totalHeight={350} />
                            </div>
                            <div className="top_image_news">
                                <NewsImageBlockComponent count={6} type="keji" width={122} height={140}
                                                         cardTitle="科技" totalWidth={400} totalHeight={350} />
                            </div>
                        </div>
                        <div className="tabs_news">
                            <Tabs >
                                <TabPane tab="要闻" key="1">
                                    <NewsBlockComponent count={34} type="top" width="100%" border="false"/>
                                </TabPane>
                                <TabPane tab="国际" key="2">
                                    <NewsBlockComponent count={34} type="guoji" width="100%" border="false"/>
                                </TabPane>
                                <TabPane tab="社会" key="3">
                                    <NewsImageBlockComponent count={18} type="shehui" width={132} height={140}
                                                             totalWidth={425} totalHeight={915} />
                                </TabPane>
                                <TabPane tab="财经" key="4">
                                    <NewsImageBlockComponent count={18} type="caijing" width={132} height={140}
                                                             totalWidth={425} totalHeight={915} />
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className="tabs_product">
                            <Tabs >
                                <TabPane tab="我的产品" key="1">
                                    <ProductComponent />
                                </TabPane>
                                <TabPane tab="全部产品" key="2">
                                    <ProductAllComponent />
                                </TabPane>
                            </Tabs>
                        </div>
                        <div className="clearfix">
                            <div className="top_image_news">
                                <NewsImageBlockComponent count={6} type="yule" width={180} height={140}
                                                     cardTitle="娱乐" totalWidth={1115} totalHeight={250} />
                            </div>
                            <div className="top_image_news">
                                <NewsImageBlockComponent count={6} type="junshi" width={180} height={140}
                                                     cardTitle="军事" totalWidth={1115} totalHeight={250} />

                            </div>
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}