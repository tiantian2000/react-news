/**文字新闻块
 * Created by Administrator on 2018/2/18.
 */
import React from 'react';
import {Card} from 'antd';
import {Link} from 'react-router-dom'

export default class NewsBlock extends React.Component{

    constructor(){
        super();
        this.state = {
            news: ''
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
                console.log(this.state.news)
            })

    }

    render(){
        return(
            <div className="top_news">
                <Card>
                    <ul>
                        {
                            this.state.news.length?
                                this.state.news.map((item)=>{
                                    return(
                                        <li>
                                            {/*页面跳转,并且传递新闻类型做为参数*/}
                                            <Link to={{pathname:"/detail/"+
                                                item.uniquekey,query:{type:this.props.type}}}>{item.title}
                                            </Link>
                                        </li>
                                    );
                                }):'加载中...'
                        }
                    </ul>
                </Card>
            </div>
        )
    }
}
