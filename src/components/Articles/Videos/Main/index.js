import React from 'react'
import VideoList from '../../../Widgets/VideosList/videoslist'

const VideoMain = ()=> {
    return(
        <div>
         <VideoList
            type="card"
            title={true}
            loadmore={true}
            start={0}
            amount={10}
            />

        </div>
    )
}

export default VideoMain