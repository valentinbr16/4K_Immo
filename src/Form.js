import React from 'react';
import './Form.css';

export default function Form() {

    return (
        <footer>
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
                <div>
                    <input className="form__file" type="file" multiple/>
                </div>
                <div className="form__btn">
                    <input className="form__submit" type="submit" value="Envoyer"/>
                    <input className="form__reset" type="reset" value="Réinitialiser"/>
                </div>
            </form>
            <p className="footer__copyright">Siège social: 11 rue Louis Lethien, 62420 BILLY-MONTIGNY	APE : 6820B SIRET : 898 321 666 000 15 TVA : FR42898321666 Capital : 15 000 €<br/>
            Site réalisé par <em>Valentin Bruniau</em>: <a href="https://valentin-bruniau-danma.netlify.app">https://valentin-bruniau-danma.netlify.app/</a></p>
        </footer>
    )
}
