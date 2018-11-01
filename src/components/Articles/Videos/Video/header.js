import React from 'react'
import TeamInfo from '../../Elements/teaminfo';
import styles from '../../articles.css';

const Header = (props)=>{
    const teamInfo = (team)=>{
        return team ? 
        <TeamInfo team={team}/>
        :null
    }
    return(
        <div>
            {teamInfo(props.teamData)}
           
        </div>
    )
}

export default Header