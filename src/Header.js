import React from 'react'
import './Header.css'
import { Person } from '@material-ui/icons'
import ForumIcon from '@material-ui/icons/Forum'
import IconButton from '@material-ui/core/IconButton'




const Header = () => {
    return (
        <div className='header'>
            <IconButton>
                <Person fontSize='large' className='header__icon' />
            </IconButton>
            <IconButton>
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder-main" className='header_logo' />
            </IconButton>
            
            <IconButton>
                <ForumIcon fontSize='large' className='header__icon' />
            </IconButton>

        </div>
    )
}

export default Header