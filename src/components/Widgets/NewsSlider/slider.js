import React, { Component } from 'react'
import axios from 'axios';
import SliderTemplates from './slidertemp'

import { URL } from '../../../config'

class NewsSlider extends Component {

    state = {
        news: []
    }
    //connects to database and gets data before mounting component
    componentWillMount(){
        axios.get(`${URL}/articles?_start=${this.props.start}&_end=${this.props.amount}`)
        .then( response => {
            this.setState({
                //sets news to data gotten from database
                news:response.data
            })
        })
    }

    render(){
       
        return(
            //returns template with props passed
                <div>
                   <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
                </div>
        )
    }
}

export default NewsSlider