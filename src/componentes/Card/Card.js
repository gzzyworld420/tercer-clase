import React from 'react';


const Card = (props) => {
    return (
      
        <div className="character-card">
        <img src={props.img} alt="" className='logo'/>
        <h4>{props.tituloCard}</h4>
        <p>{props.description}</p>
        <a href="#">{props.anchor}</a>
        </div>
        
    );
    }

export default Card;