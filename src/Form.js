import React from 'react';
import './Form.css';

export default function Form() {

    return (
        <form className="form">
            <div id="contact" className="form__name">
                <input className="form__firstname" id="firstname" placeholder="Nom" type="text" name="firstname" id="firstname" />
    
                <input className="form__lastname" id="lastname" placeholder="Prénom" type="text" name="lastname" id="lastname" />
            </div>

            <div>
                <input className="form__mail" id="mail" placeholder="Adresse mail" type="email" name="email" id="email" />
            </div>

            <div>
                <textarea className="form__comment" id="comment" placeholder="Votre message" name="comment" id="comment"/>
            </div>
        </form>
    )
}
