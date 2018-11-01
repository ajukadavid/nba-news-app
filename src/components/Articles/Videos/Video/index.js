import React, { Component } from 'react'
import axios from 'axios'
import {URL} from '../../../../config'
import styles from '../../articles.css';
import Header from './header';
import VidRelated from '../../../Widgets/VideosList/videosrelated/vidrelated'
class VideoArticle extends Component{

    state = {
        article:[],
        team:[],
        teams:[],
        related:[]
    }

    componentWillMount(){
        //match id of id in props
        axios.get(`${URL}/videos?id=${this.props.match.params.id}`)
        .then(response=>{
            let article = response.data[0]
            //return article object
           
            //get team id from value of "team" in article object
            axios.get(`${URL}/teams?id=${article.team}`)
            .then(response=>{
                this.setState({
                    //SET STATE of articles to response.data
                    article,
                    team:response.data
                })
                //call get related function
                this.getRelated();
            })

        })
    }

    getRelated = ()=> {
       

        //search through team json and fetch data
        axios.get(`${URL}/teams`)
        .then(response =>{
            let teams = response.data;
            //query team data for value of city
             axios.get(`${URL}/videos?q=${this.state.team[0].tags}&_limit=3`)
             .then(response => {
                    this.setState({
                        teams,
                        related:response.data
                    })
             })

        })

    }
    render(){
        const article = this.state.article;
        const team = this.state.team;


        return(
           
            <div>
             <Header teamData={team[0]}/>
             <div className={styles.videoWrapper}>
                <h1>{article.title}</h1>
                <iframe
                title="videoplayer"
                width="100%"
                height="300px"
                src={`https://www.youtube.com/embed/${article.url}`}
                >

                </iframe>
            </div>
            <VidRelated 
            data={this.state.related}
            teams={this.state.teams}
            />
            </div>
        )
    }
}

export default VideoArticle