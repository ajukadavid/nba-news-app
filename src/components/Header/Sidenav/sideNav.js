import React from 'react'
import SideNav from 'react-simple-sidenav';

import SideNavItem from './sideNavItems'
const SideNavigation = (props) => {

   
    return(
        <div>
            {/* using react simple sidenav */}
            <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                backgroundColor:'#404040',
                maxWidth:'220px'
            }}
            >
            <SideNavItem />                
            </SideNav>
        </div>
    )
}
export default SideNavigation;