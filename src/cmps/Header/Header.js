import React from 'react'
import './Header.css'

const Header = ({ name }) => {
    return (
        <div className='headerContainer'>
            <h1 className='header'>{name}</h1>
        </div>
    )
}

export default Header