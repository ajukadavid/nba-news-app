import React from 'react'
import style from './header.css'
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './Sidenav/sideNav'

const Header = (props) => {




    const logo = () => (
        //get logo
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>

    )
    const navbars = () => (

        <div className={style.bars}>
        {/* font awesome bars */}
            <FontAwesome name="bars"
                onClick={props.onOpenNav}
                style={{
                    color: '#dfdfdf',
                    padding: '10px',
                    cursor: 'pointer'
                }} />
        </div>
    )
    return (
        <header className={style.header}>
        {/* call sidenav with props gott3n from header to use shownav and hidenav*/}
            <SideNav {...props} />
            <div className={style.headerOpt}>
                {navbars()}
                {logo()}
            </div>
        </header>
    )
}
export default Header