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

            <div className="grid-container">
                <div className="item-one">
                    <input type="text" placeholder="Voornaam" />
                </div>

                <div className="item-two">
                    <input type="text" placeholder="Naam" />
                </div>

                
                <div className="item-three">
                    <input type="text" placeholder="Nummerplaat" />
                </div>

                <div className="item-four">
                    <input type="email" placeholder="Email" />
                </div>

                
                <div className="item-five">
                    <input type="text" placeholder="Straat" />
                </div>

                <div className="item-six">
                    <input type="text" placeholder="Nummer" />
                </div>

                <div className="item-seven">
                    <input type="text" placeholder="Bus" />
                </div>


                <div className="item-eight">
                    <input type="text" placeholder="Stad" />
                </div>

                <div className="item-nine">
                    <input type="text" placeholder="Postcode" />
                </div>

                <div className="item-ten">
                    <input type="text" placeholder="Telefoon" />
                </div>

                <div className="item-eleven">
                    <input type="checkbox" className="checkbox"/>
                    Hou mij op de hoogte wanneer er interessante acties zijn bij Q Team.
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