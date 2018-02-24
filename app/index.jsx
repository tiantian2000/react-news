import React from 'react'
import {render} from 'react-dom'

//引入react-router
import {Router,Route,HashRouter,Switch,hashHistory} from 'react-router-dom'
import IndexComponent from './components/index'
import NewsDetailComponent from './components/news_detail'
import NewsContainerSubComponent from './components/news_container_sub'
import './static/css/main.css'

export default class Root extends React.Component{
    render(){
        return(
            <HashRouter history={hashHistory}>
                <div>
                    <Route exact path="/" component={IndexComponent} />
                    <Route exact path="/sub/:id" component={NewsContainerSubComponent} />
                    <Route exact path="/detail" component={IndexComponent} />
                    <Route exact path="/detail/:id" component={NewsDetailComponent} />
                </div>
            </HashRouter>
        )
    }
}

render(
    <Root/>,
    document.getElementById('root')
)