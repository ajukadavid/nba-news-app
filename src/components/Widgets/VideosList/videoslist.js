import React, { Component } from 'react';
import styles from './videoslist.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/buttons'
import VideoTemp from './videotemp';

class VideoList extends Component{
    state = {
        teams:[],
        videos:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }
    //Check if title ia true of false to render
    renderTitle = (title) => {
        return title ? 
        <h3><strong>Nba</strong> Videos</h3>
        : null
    }


    componentWillMount(){
        this.request(this.state.start, this.state.end)
    }

    request = (start,end) => {
        //if the team array is empty then a request should be sent to get data from the db file else the state should remain as is
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then(response => {
                this.setState({
                    teams:response.data
                })
            })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then(response => {
            this.setState({
                //set state of array to data gotten
                videos:[...this.state.videos,...response.data],
                end,
                start
            })
        }) 
    }

    renderVideos = ()=>{
        let template = null;

        switch(this.props.type){
            case('card'):
                template = <VideoTemp data={this.state.videos} teams={this.state.teams}/>
            break;

            default:
                template = null;

        }

        return template
    }
    loadmore = () => {
         let end = this.state.end + this.state.amount;
        this.request(this.state.end, end)
    }
    //check button props case if it matches type to render button link
    renderButton = () => {
        return this.props.loadmore ? 
        //if true then return button to call this.loadmore function as props
        <Button type="loadmore"
        loadmore={()=>this.loadmore()}
        calltoaction="Load More Videos"
        /> 
        
        : 
        //returns button div with video props
        <Button 
        type="linkTo"
        calltoaction="More Videos" 
        linkTo="/videos"
        />
        
    }

    render(){
       
        return(
            <div className={styles.videoList_wrapper}>
                {this.renderTitle(this.props.title)}
                {this.renderVideos()}
                {this.renderButton()}
            </div>
        )
    }
    
}

export default VideoList;