import React from 'react';
import './Header.css';

export default function Header() {
    return (
            <div className="header__banner">
                <img className="header__logo" src="./logo4K_Immo.png" alt="Logo 4K Immo" />
                <a className="header__link" href="#cards">Logements</a>
                <a className="header__link" href="#contact">Contact</a>
            </div>        
    )
}
