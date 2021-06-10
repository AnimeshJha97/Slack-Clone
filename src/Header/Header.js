import React from 'react';
import './Header.css';
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from '../StateProvider/StateProvider';

function Header() {
    //  we can grab the user that is verified and in out
    //  data layer now
    const [{ user }] = useStateValue();
    
    return (
        <div className = "header">
            <div className="header__left">
                {/* Avatar for logged in user */}
                
                <Avatar 
                    className="header__avatar" 
                    alt={user?.displayName} 
                    src={user?.photoURL}>
                </Avatar>
                {/* Time icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search icon */}
                <SearchIcon />
                
                {/* input */}
                <input placeholder="Search with Animesh Jha" type="text" className="header__searchInput"/>
            </div>
            <div className="header__right">
                {/* help icon */}
                <HelpOutlineIcon></HelpOutlineIcon>
            </div>
        </div>
    )
}

export default Header
