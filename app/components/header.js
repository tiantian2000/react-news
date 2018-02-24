/**
 * Created by Administrator on 2018/2/14.
 */
import React from 'react'
import {Row,Col,Menu,Icon,Tabs,message,Modal,Form,Input,Button,Checkbox} from 'antd'
import {Link} from 'react-router-dom'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class Header extends React.Component{

    constructor(){
        super();
        //定义默认选中的菜单项
        this.state = {
            current: 'top',       //当前菜单项
            modalVisible: false, //是否显示模态框
            action: 'login',     //按钮的状态
            hasLogined: false,   //是否已经登录
            userNickName: '游客',    //用户昵称
            userId: 0             //用户ID
        }

        console.log('constructor' + this.state.current);
    }

    componentWillMount(){
        console.log(this.props)
        if(localStorage.type != ''){
            this.setState({
                current: localStorage.type
            })
        }
    }

    //设置模态框显示或隐藏
    setModalVisible(flag){
        this.setState({
            modalVisible: flag
        })
    }

    //处理菜单点击事件
    handleClick(e){
        console.log('click ', e);
        if(e.key=='register'){
            this.setState({
                current: 'register',
                modalVisible: true
            });
        }else{
            this.setState({
                current: e.key,
                modalVisible: false
            });
        }

        localStorage.type = e.key;

    }

    //处理表单提交事件
    handleSubmit(e){
        console.log('提交')
        //阻止事件冒泡(取消事件的默认动作)
        e.preventDefault();
        //获取表单提交的值
        var formData = this.props.form.getFieldsValue();
        console.log(formData);
        var url = "http://newsapi.gugujiankong.com/Handler.ashx?action=" + this.state.action
            + "&username="+username+"&password="+password+"&r_userName=" + formData.r_username + "&r_password="
            + formData.r_password + "&r_confirmPassword=" + formData.re_password;
        //console.log(url)
        fetch(url,{
            method: 'GET'
        }).then(res=>res.json()).then(result=>{
            console.log(result)
        })
        if(this.state.action == 'login'){
            this.setState({hasLogined: true})
        }

        message.success('请求成功')
        this.setModalVisible(false)

/*        var url = 'http://localhost:8888/Shop/queryOneBook';
        fetch(url,{
            method: 'get',
            mode: 'cors'
        }).then(res=>res.json()).then(result=>{
             console.log(result)
             console.log(result.name)
        })*/

    }

    //切换tab框时触发的事件
    callBack(key){
        console.log(key)
        if(key == 1){
            this.setState({action: 'login'});
        }else if(key == 2){
            this.setState({action: 'register'})
        }

    }

    //退出登录
    logout(){
        this.setState({hasLogined: false})
    }

    render(){
        console.log('render'+this.state.current)
        let {getFieldProps} = this.props.form;

{/*        <Button type="dashed" htmlType="button">{this.state.userNickName}</Button>
        &nbsp;&nbsp;
        <Link target="_blank" to={`/usercenter`}>
            <Button type="dashed" htmlType="button">个人中心</Button>
        </Link>
        &nbsp;&nbsp;
        <Button type="ghost" htmlType="button">退出</Button>*/}

        return(
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="" className="logo">
                            <img src="./app/static/images/header_log.png" alt="logo"/>
                            <span>天天新闻</span>
                        </a>
                    </Col>
                    <Col span={15}>
                        <Menu mode="horizontal" selectedKeys={this.state.current}
                              onClick={this.handleClick.bind(this)}>
                            <Menu.Item key="top"><Link to="/"><Icon type="appstore"/>头条</Link></Menu.Item>
                            <Menu.Item key="guonei"><Link to="/sub/guonei" ><Icon type="appstore"/>国内</Link></Menu.Item>
                            <Menu.Item key="guoji"><Link to="/sub/guoji"><Icon type="appstore"/>国际</Link></Menu.Item>
                            <Menu.Item key="shehui"><Link to="/sub/shehui"><Icon type="appstore"/>社会</Link></Menu.Item>
                            <Menu.Item key="tiyu"><Link to="/sub/tiyu"><Icon type="appstore"/>体育</Link></Menu.Item>
                            <Menu.Item key="yule"><Link to="/sub/yule"><Icon type="appstore"/>娱乐</Link></Menu.Item>
                            <Menu.Item key="junshi"><Link to="/sub/junshi"><Icon type="appstore"/>军事</Link></Menu.Item>
                            <Menu.Item key="caijing"><Link to="/sub/caijing"><Icon type="appstore"/>财经</Link></Menu.Item>
                            <Menu.Item key="keji"><Link to="/sub/keji"><Icon type="appstore"/>科技</Link></Menu.Item>
                            {/*{userShow}*/}
                        </Menu>
                        <Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
                        onCancel={()=>{this.setModalVisible(false)}}
                        onOk={()=>{this.setModalVisible(false)}}
                        okText="关闭" cancelText="取消"
                        >
                            <Tabs type="card" defaultActiveKey="1" onChange={this.callBack.bind(this)}>
                                <TabPane tab="登录" key="1">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="用户名">
                                            <Input placeholder="请输入用户名" {...getFieldProps('username')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入密码"
                                                   {...getFieldProps('password')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">登录</Button>
                                    </Form>
                                </TabPane>
                                <TabPane tab="注册" key="2">
                                    <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="用户名">
                                            <Input placeholder="请输入用户名" {...getFieldProps('r_username')} />
                                        </FormItem>
                                        <FormItem label="密码">
                                            <Input type="password" placeholder="请输入密码"
                                                   {...getFieldProps('r_password')} />
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            <Input type="password" placeholder="请再次输入密码"
                                                   {...getFieldProps('re_password')} />
                                        </FormItem>
                                        <Button type="primary" htmlType="submit">注册</Button>
                                    </Form>
                                </TabPane>

                            </Tabs>
                        </Modal>
                    </Col>
                    <Col span={3} className="register">
                        {
                            this.state.hasLogined ?
                            <div>
                                <Link target="_blank" to={`/usercenter`}>
                                    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                                </Link>&nbsp;
                                <Button type="ghost" htmlType="button" onClick={this.logout.bind(this)}>退出</Button>
                            </div> :
                            <div>
                               <Button type="dashed" htmlType="button" onClick={()=>this.setModalVisible(true)}>注册/登录</Button>
                            </div>
                        }

                    </Col>
                </Row>
            </header>
        )
    }
}

Header = Form.create({})(Header);
//export default withRouter(Header)
export default Header;