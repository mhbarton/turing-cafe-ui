import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number }) => {
    return (
        <div className='card' id={id}>
            <h2 className='guest-name'>{name}</h2>
            <p className='guest-date'>{date}</p>
            <p className='guest-time'>{time} pm</p>
            <p className='guest-number'>Number of Guests: {number}</p>
            <button>Cancel</button>
        </div>
    )
}

export default Card;