import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img src="https://www.dlf.pt/png/big/17/170060_photo-logo-png.png"
                 alt="logo"/>
        </header>
    );
}

export default Header;