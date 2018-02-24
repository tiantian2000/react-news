/**
 * Created by Administrator on 2018/2/19.
 */
import React from 'react';
import {Row,Col,Card,List, Avatar, Button, Spin,Divider,BackTop} from 'antd';
import {Link} from 'react-router-dom'
import NewsImageBlockComponent from './news_image_block'
import HeaderComponent from './header'
import FooterComponent from './footer'

const fetchOptions = {
    method: 'GET'
}
const titleDefine =
    {
       'guonei': '国内新闻',
       'guoji':  '国际新闻',
       'shehui': '社会新闻',
       'tiyu':   '体育新闻',
       'yule':   '娱乐新闻',
       'caijing': '财经新闻',
       'junshi' : '军事新闻',
       'keji'   : '科技新闻'
    }


export default class NewsContainerSub extends React.Component{

    constructor(){
        super();
        this.state = {
            first: '',
            news: '',
            loading: true,
            loadingMore: false,
            showLoadingMore: true,
            data: [],
            count: 16
        }
    }

    /**
     * 组件接收到新的props时调用，并将其作为参数nextProps使用
     * @param nextProps
     */
    componentWillReceiveProps(nextProps){
        var dataUrl = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='
            + nextProps.match.params.id + '&count='+this.state.count;
        console.log(dataUrl)
        fetch(dataUrl,fetchOptions).then(response=>response.json())
            .then(result => {
                console.log(result)
                var showResult = []
                result.map((item,index)=>{
                    if(index == 1){
                        this.setState({
                            first: item
                        })
                    }else{
                        showResult.push(item)
                    }
                })
                this.setState({
                    loading: false,
                    data: showResult
                });
            })

    }

    componentWillMount() {
        var dataUrl = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='
            + this.props.match.params.id + '&count='+this.state.count;
        console.log(dataUrl)
        fetch(dataUrl,fetchOptions).then(response=>response.json())
            .then(result => {
                console.log(result)
                var showResult = []
                result.map((item,index)=>{
                    if(index == 1){
                        this.setState({
                            first: item
                        })
                    }else{
                        showResult.push(item)
                    }
                })
                this.setState({
                    loading: false,
                    data: showResult
                });
            })
    }

    onLoadMore() {
        this.setState({
            loadingMore: true,
        });

        var count = this.state.count+10;
        var dataUrl = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type='
            + this.props.match.params.id + '&count='+ count;
        console.log(dataUrl)
        fetch(dataUrl,fetchOptions).then(response=>response.json())
            .then(result => {
                console.log(result)
                this.setState({
                    loadingMore: false,
                    data: result,
                    count: count
                });
            }).then(()=>{
                window.dispatchEvent(new Event('resize'));
            })

    }



    render(){
        const { loading, loadingMore, showLoadingMore, data } = this.state;
        const loadMore = showLoadingMore ? (
            <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
                {loadingMore && <Spin />}
                {!loadingMore && <Button onClick={this.onLoadMore.bind(this)}>更多</Button>}
            </div>
        ) : null;
        return(
            <div className="news_container_sub">
                <HeaderComponent />
                <Row>
                    <Col span={2}></Col>
                    <Col span={14}>
                        <Card bordered={false}>
                            <div className="title">
                                <Divider type="vertical" />
                                <a href="javascript:void(0)">{titleDefine[this.props.match.params.id]}</a>
                            </div>
                            <Card bordered={false}>
                                <Link to={{pathname:"/detail/"+
                                this.state.first.uniquekey,query:{type:this.props.match.params.id}}}>
                                    <img src={this.state.first.thumbnail_pic_s02} width="670" height="345"/>
                                </Link>
                            </Card>
                            <List
                                className="demo-loadmore-list"
                                loading={loading}
                                itemLayout="horizontal"
                                loadMore={loadMore}
                                dataSource={this.state.data}
                                renderItem={item => (
                                    <List.Item >
                                        <List.Item.Meta
                                            title={<Link to={{pathname:"/detail/"+
                                            item.uniquekey,query:{type:this.props.match.params.id}}}>
                                                {item.title}</Link>}
                                            avatar={<Link to={{pathname:"/detail/"+
                                            item.uniquekey,query:{type:this.props.match.params.id}}}>
                                                <Avatar src={item.thumbnail_pic_s} />
                                            </Link>}
                                            description={item.author_name}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Card>
                    </Col>
                    <Col span={6}>
                        <div c="image_news">
                            <NewsImageBlockComponent count={32} type="top" width={137} height={140}
                                                     cardTitle="今日推荐" totalWidth={300} totalHeight={2350} />
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