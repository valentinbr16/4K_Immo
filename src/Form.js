import React from 'react';
import './Form.css';

export default function Form() {

    return (
        <form className="form">
            <div id="contact" className="form__name">
                <div>
                    <input className="form__firstname" id="firstname" placeholder="Nom" type="text" name="firstname" id="firstname" />
                </div>
                <div>
                    <input className="form__lastname" id="lastname" placeholder="Prénom" type="text" name="lastname" id="lastname" />
                </div>

            </div>

            <div>
                <input className="form__mail" id="mail" placeholder="Adresse mail" type="email" name="email" id="email" />
            </div>

            <div>
                <div>
                    <label className="form__label" htmlFor="reason">Veuillez choisir un motif :</label>
                </div>
                <select className="form__reason" name="reason" id="reason" placeholder="Veuillez choisir un motif" required>
                    <option value="renseignement">Renseignement</option>
                    <option value="visite">Demande de visite</option>
                    <option value="prereservation">Préréservation</option>                    
                    <option value="autre">Autres</option>
                </select>
            </div>

            <div>
                <textarea className="form__comment" id="comment" placeholder="Votre message" name="comment" id="comment"/>
            </div>
        </form>
    )
}
