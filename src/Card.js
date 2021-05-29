import React from 'react';
import './Card.css';

export default function Card({type, surface, city}) {


    return (
            <div id="cards" className = "card">
                <img src=""/>
                <h2 className="card__title">
                    {type} {surface}<br/>
                    <span className="aLouer">À LOUER</span>
                </h2>
                <p>
                    Situé à <strong>{city}</strong>
                </p>
                <a href="">
                    En savoir plus
                </a>
            </div>
    )
}
