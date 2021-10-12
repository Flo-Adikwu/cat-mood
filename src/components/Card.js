import React from 'react';
import boldCat from '../assets/images/bold-cat-img.svg';
import '../styles/Card.scss';


const Card = (props) => {
    return (
        <div className="main-div" style={props.style}>
            <div style={props.imgStyle} className="main-div__img">
                <img src={props.img} alt={props.alt} />
            </div>
            <div className="maid-div__mood-and-date">
                <h3 style={props.textStyle}>{props.mood}</h3>
                <p>{props.date}</p>
            </div>
            <img className="main-div__bold-cat" src={boldCat} alt="bold-cat" />
        </div>
    )
}

export default Card;