/**图片新闻块
 * Created by Administrator on 2018/2/18.
 */
import React from 'react';
import {Card} from 'antd';
import {Router,Route,Link,browserHistory} from 'react-router-dom'
const { Meta } = Card;

export default class NewsImageBlock extends React.Component{
    constructor(){
        super();
        this.state = {
            news: '',
        }
    }

    //加载之前获取新闻
    componentWillMount(){
        var url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='+this.props.type
            +'&count='+this.props.count;
        console.log(url)
        var fetchOptions = {
            method:'GET'
        }
        fetch(url,fetchOptions).then(response=>response.json())
            .then(result=>{
                this.setState({
                    news: result
                })
            })

    }

    render()
    {
        return (
            <div className="top_image">
                <Card title={this.props.cardTitle} bordered={true}
                      style={{width:this.props.totalWidth,height:this.props.totalHeight}}>
                {
                    this.state.news.length?
                        this.state.news.map((item)=>{
                            return(
                                <Link to={{pathname:"/detail/"+
                                item.uniquekey,query:{type:this.props.type}}}>
                                    <Card className="image_block"
                                        bordered={false}
                                        style={{ width:this.props.width,height:this.props.height }}
                                        cover={<img alt="新闻" src={item.thumbnail_pic_s} />}
                                    >
                                        <Meta
                                            title={item.title}
                                            description={item.author_name}
                                        />
                                    </Card>
                                </Link>
                            );
                        })
                     :'加载中...'
                }
                </Card>
            </div>
        )
    }
}
