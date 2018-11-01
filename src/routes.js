import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Layout from './components/HOC/layout/layout';
import VideoMain from './components/Articles/Videos/Main/index'
import NewsMain from './components/Articles/News/Main/index.js'
import NewsArticles from  './components/Articles/News/Post/index'
import VideoArticles from './components/Articles/Videos/Video/index'
class Routes extends Component {
    render(){
        return(
            <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/news" exact component={NewsMain} />
                <Route path="/videos" exact component={VideoMain} />
                <Route path="/articles/:id" exact component={NewsArticles} />
                <Route path="/videos/:id" exact component={VideoArticles} /> 

            </Switch>
            </Layout>
        )
    }
}

export default Routes;