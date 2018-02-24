/**
 * Created by Administrator on 2018/2/20.
 */
import React from 'react';
import {Row,Col,message,Form,Input,Button,Card} from 'antd'
import {makeDate} from '../static/js/DateFormat'
const FormItem = Form.Item;
class NewsComment extends React.Component{

    constructor(){
        super();
        this.state = {
            comments: [
                {
                    username: '元老有啥用',
                    content:  '我咋遇不到这种好事呢？',
                    datetime: '2018-05-28 22:10:32'
                },
                {
                    username: '路过的酱油哥哥 ',
                    content:  '为什么有的新闻可以评论，有的却不可以！',
                    datetime: '2018-02-16 16:23:43'
                },
                {
                    username: '你我的传说不是梦',
                    content:  '这个新闻不错啊',
                    datetime: '2018-01-22 09:01:55'
                }

            ],
            comment: ''
        }
    }

    componentDidMount(){

    }

    //处理表单提交事件
    handleSubmit(e){
        e.preventDefault();
        var formData = this.props.form.getFieldsValue();
        var remark = formData.remark;
        //react 的 setState 是异步执行的，所以你后面立即 console 是还没改变状态
        this.setState({
            comment: {
                username: '游客',
                content: remark,
                datetime: makeDate()
            }
        },()=>{ //异步设置完state后调用,设置新的state
            this.state.comments.unshift(this.state.comment)
            //清空文本框,让render重新更新
            this.props.form.setFieldsValue({remark:''})
        })

    }


    render(){
        let {getFieldProps} = this.props.form;
        const commentList = this.state.comments.length?
            this.state.comments.map((item,index)=> {
                return(<Card key={index} title={item.username} extra={"发表于"+item.datetime}>
                    <p>{item.content}</p>
                </Card>)
            }):
            '没有加载到任何评论';
        return(
            <div>
                <Row>
                    <Col span={24}>
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormItem label="您的评论">
                                <Input type="textarea"  rows="3" placeholder="随便写"
                                       {...getFieldProps('remark',{initialValue:''})}/>
                                <Button type="primary" htmlType="submit">提交评论</Button>
                            </FormItem>
                        </Form>
                        {commentList}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default NewsComment = Form.create({})(NewsComment)