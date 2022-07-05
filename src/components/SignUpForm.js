import React from "react";
import logo from '../images/logo.png';
import footerImage from '../images/Image.png';

const SignUpForm = () => {
    return (
        <div className="container">

            <div className="img">
                <img src={logo} />
            </div>

            <h1><span className="italic-text">vul uw</span> gegevens aan</h1>

            <div className="radio__holder">

                <label htmlFor="myRadioIdOne" className="radio">
                    <input type="radio" id="myRadioIdOne" className="radio__input" name=""/>
                    <div className="radio__radio"></div>
                    Dhr.
                </label>

                <label htmlFor="myRadioIdTwo" className="radio">
                    <input type="radio" id="myRadioIdTwo" className="radio__input" name=""/>
                    <div className="radio__radio"></div>
                    Mevr.
                </label>
                
            </div>

            <div className="flex__container">
                <div className="flex__row">
                    <input type="text" placeholder="Voornaam" />
                    <input type="text" placeholder="Naam" />
                </div>

                
                <input type="text" placeholder="Nummerplaat" />

                <input type="email" placeholder="Email" />
                
                <input type="text" placeholder="Straat" />


                <div className="flex__row">
                    <input type="text" placeholder="Nummer" />
                    <input type="text" placeholder="Bus" />
                </div>


                <div className="flex__row">
                    <input type="text" placeholder="Stad" />
                    <input type="text" placeholder="Postcode" />
                </div>

                <input type="text" placeholder="Telefoon" />


                <div className="flex__checkbox">
                    <input type="checkbox" className="checkbox"/>
                    <p>Hou mij op de hoogte wanneer er interessante acties zijn bij Q Team.</p>  
                </div>

            </div>

            <div className="btn">
                <p>Bevestigen</p>
            </div>
            

            <div className="footer__image">
                <img src={footerImage} className="image" alt="" />
            </div>

        </div>
    )
}

export default SignUpForm;