import React from 'react';
import styles from '../videoslist.css';
import VideoTemp from '../videotemp'

const VidRelated = (props)=>{
    return(
        <div className={styles.relatedWrapper}>
            {/* <VideoTemp 
            data={props.data}
            teams={props.teams}
            /> */}
            {props.data}
        </div>
    )
}

export default VidRelated;