import React from 'react'
import style from './Navigation.module.css'
import {Link} from 'react-router-dom'

export default function () {
    return (
        <nav className={style.nav}>
            <h2 className={style.text}>React 2023</h2>

            <span>
                <Link to="/">Products</Link> 
                <Link to='/about'>About Page</Link> 
            </span>
        </nav>
    )
}
