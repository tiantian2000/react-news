/**
 * Created by Administrator on 2018/2/18.
 */
import React from 'react';
import {Row,Col,BackTop,Divider } from 'antd'
import HeaderComponent from './header'
import FooterComponent from './footer'
import NewsImageBlockComponent from './news_image_block'
import NewsCommentComponent from './news_comment'
import '../static/css/detail.css'
export default class NewsDetail extends React.Component{

    constructor(){
        super();
        this.state = {
            newsItem:  ''
        }
    }

    /**
     * 组件接收到新的props时调用，并将其作为参数nextProps使用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        var url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey='+
            nextProps.match.params.id;
        var fetchOptions = {
            method:'GET'
        };
        fetch(url,fetchOptions).then(response=>response.json()).then(result=>{
            this.setState({
                newsItem: result
            })
        });

    }

    componentWillMount(){
        console.log(this.props)
        var url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey='+
            this.props.match.params.id;
        var fetchOptions = {
            method:'GET'
        };
        fetch(url,fetchOptions).then(response=>response.json()).then(result=>{
           this.setState({
               newsItem: result
           })
        });
        if(this.props.location.query){
            this.setState({
                type: this.props.location.query.type
            })
        }else{
            this.setState({
                type: 'top'
            })
        }
    }

    createMarkup(){
        return {__html: this.state.newsItem.pagecontent}
    }

    render(){
        return(
            <div className="detail">
                <HeaderComponent/>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="article" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <Divider />
                        <NewsCommentComponent/>
                    </Col>
                    <Col span={6}>
                       <div className="image_news">
                            <NewsImageBlockComponent count={32} type={this.state.type} width={137} height={140}
                                                 cardTitle="相关新闻" totalWidth={300} totalHeight={2350} />
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <FooterComponent />
                <BackTop />
            </div>
        )
    }
}