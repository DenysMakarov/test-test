import React from 'react'
import './CardDetail.css'

const CardDetail = ({ entry, value }) => {
    return (
        <div>
            <span className='cardDetailSpan'><b>{entry}</b></span>
            <span className='cardDetailSpan'>{value}</span>
        </div >
    )
}

export default CardDetail