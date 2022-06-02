import React from 'react'

export const GiftGridItem = (props) => {
    return (
        <div className='card'>
        <img  src={props.images} alt="" />
        <p>{props.title}</p>
        </div>
    )
}