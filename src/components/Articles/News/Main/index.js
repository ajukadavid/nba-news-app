import React from 'react'
import NewsList from '../../../Widgets/NewsList/newslist'
import NewsSlider from '../../../Widgets/NewsSlider/slider'
const NewsMain = ()=>{
    return(
        <div>
            <NewsSlider
            type='featured'
            settings={{dots:false}}
            start={0}
            amount={3}
            />

            <NewsList 
            type="CardMain"
            loadmore={true}
            start={3}
            amount={3}
            />
        </div>
    )
}

export default NewsMain;