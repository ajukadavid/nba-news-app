import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newslist'
import VideoList from '../Widgets/VideosList/videoslist'
const Home = () => {
    return (
        <div>
            <NewsSlider 
            type='featured'
            start={0}
            amount={3}
            settings={{
                dots:false
            }}
            />
            <NewsList
            type="card"
            loadmore={true}
            start={3}
            amount={3}
            />
            <VideoList
            type="card"
            title={true}
            loadmore={true}
            start={0}
            amount={3}
            />
        </div>
    )
}

export default Home