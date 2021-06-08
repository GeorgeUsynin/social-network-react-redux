import React from 'react';
import cls from "./Header.module.css";
import logo from "../../images/nodejs.png"
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    logout: () => void
}

const Header: React.FC<HeaderPropsType> = (props) => {

    const {
        userId,
        email,
        isAuth,
        login,
        logout
    } = props

    return (
        <header className={cls.header}>
            <img src={logo}
                 alt="logo"/>
            <div className={cls.loginBlock}>
                {
                    isAuth
                        ?
                        <div>
                            <div>
                                {login}
                            </div>
                            <div>
                                <button onClick={logout}>Log out</button>
                            </div>
                        </div>
                        :
                        <NavLink to={'/login'}>Login</NavLink>
                }

            </div>
        </header>
    );
}

export default Header;