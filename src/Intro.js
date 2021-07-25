import React from 'react';
import './Intro.css';

export default function Intro() {
    return (
        <section className="intro">
            <div>
                <img className="intro__img" src="Carte_4KImmo.png" alt="Carte de france avec location des logements indiqués"/>
            </div>
            <div>
                <h1 className="intro__title">4K Immo</h1>
                <p className="intro__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tenetur libero asperiores modi dolore, autem saepe molestias eius dignissimos minima eum, aliquam vel facilis, debitis placeat exercitationem officiis a necessitatibus?</p>
            </div>

        </section>
    )
}