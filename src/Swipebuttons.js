import React from 'react'
import './Swipebuttons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarIcon from '@material-ui/icons/Star'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'


const Swipebuttons = () => {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons_repeat' >
                <ReplayIcon fontSize='large'/>
            </IconButton>

            <IconButton className='swipeButtons_left' >
                <CloseIcon fontSize='large'/>
            </IconButton>

            <IconButton className='swipeButtons_star' >
                <StarIcon fontSize='large'/>
            </IconButton>

            <IconButton className='swipeButtons_right' >
                <FavoriteIcon fontSize='large'/>
            </IconButton>

            <IconButton className='swipeButtons_lightning' >
                <FlashOnIcon fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Swipebuttons