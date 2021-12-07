import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    const [toggleClass, setToggleClass] = useState('navbar')

    const toggleNavbar = () => {
        if(toggleClass === "navbar") {
            setToggleClass('navbar responsive');
        } else {
            setToggleClass('navbar');
        }
    }

    return (
            <header className='header'>
                <img className="header__logo" src="./Logo4K_Immo.jpg" alt="Logo 4K Immo" />

                {/* Bootstrap Navbar customized */}
                <nav className={toggleClass}>                    
                    <a href="#" className='navbar__toggle' onClick={toggleNavbar}>&#9776;</a>

                    <a className='navbar__element' href="#intro">Présentation</a>
                    <a className='navbar__element' href="#cards">Nos Logements</a>
                    <a className='navbar__element' href="#form">Nous Contacter</a>
                    {/* <a className='navbar__element' href="#">Onglet4</a> */}
                </nav>

            </header>        
    )
}
