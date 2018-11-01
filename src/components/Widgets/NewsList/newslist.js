import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
import styles from './newslist.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { URL } from '../../../config'
import Button from '../Buttons/buttons';
import CardInfo from '../Card Info/cardinfo';

class NewsList extends Component {
    state = {
        teams: [],
        items: [],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount
    }
    //connect to database and get items
    componentWillMount() {
        this.request(this.state.start, this.state.end)
    }

    request = (start, end) => {
        //check the length of team array so as to only request once
        //get whole team object and set to teams array
        if (this.state.teams.length < 1) {
            axios.get(`${URL}/teams`)
                .then((response) => {
                    this.setState({
                        teams: response.data
                    })
                })
        }
        axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
            .then(response => {
                //gets previous state data and more incoming data
                this.setState({
                    items: [...this.state.items, ...response.data],
                    start,
                    end
                })
            })
    }

    //function for load more button
    loadMore = () => {
        let end = this.state.end + this.state.amount;
        //start from end to get more data from db
        this.request(this.state.end, end)
    }
    renderNews = (type) => {
        let template = null;
        //render template according to switch case
        switch (type) {
            case ('card'):
                template = this.state.items.map((item, i) =>
                    <CSSTransition
                        classNames={{
                            enter: styles.newslist_wrapper,
                            enterActive: styles.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                        <div>
                            <div className={styles.newslist_item}>
                                <Link to={`/articles/${item.id}`}>
                                    
                                        {/* pass team array as props to render on Card INFO component */}
                                        {/* get team array object and team id as props */}
                                        <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                                        <h2>{item.title}</h2>
                                    
                                </Link>
                            </div>
                        </div>
                    </CSSTransition>

                )
                break;
            case ('CardMain'):
                template = this.state.items.map((item, i) =>

                    <CSSTransition
                        classNames={{
                            enter: styles.newslist_wrapper,
                            enterActive: styles.newslist_wrapper_enter
                        }}
                        timeout={500}
                        key={i}
                    >
                       <Link to={`/articles/${item.id}`}>
                       <div className={styles.flex_wrapper}>
                            <div className={styles.left} 
                            style={{
                                background:`url('/images/articles/${item.image}')`
                            }}
                            >
                            <div></div>
                            </div>
                            <div className={styles.right}>
                             {/* pass team array as props to render on Card INFO component */}
                             {/* get team array object and team id as props */}
                           <CardInfo teams={this.state.teams} team={item.team} date={item.date} />
                            <h2>{item.title}</h2>
                            </div>

                       </div>
                       </Link>
                    </CSSTransition>
                )
                break;
            default:
                template = null
        }
        return template;
    }
    render() {
        return (
            <div>
                <TransitionGroup
                    component="div"
                    className="list"
                >

                    <div>
                        {this.renderNews(this.props.type)}
                    </div>
                </TransitionGroup>
                <Button
                    type="loadmore"
                    loadmore={() => this.loadMore()}
                    calltoaction="Load More News"
                />
            </div>

        )
    }
}

export default NewsList