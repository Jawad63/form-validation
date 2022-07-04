import React from "react";
import logo from '../images/logo.png';

const SignUpForm = () => {
    return (
        <div className="container">
            <div className="img">
                <img src={logo} />
            </div>
            <div className="wrapper">
                <p className="heading"><span>vul uw</span> gegevens aan</p>

                <div className="form">
                    <div className="input-box">
                        <input type="name" placeholder="Voornaam" />
                        <input type="name" placeholder="Naam" />
                    </div>

                    <input type="name" placeholder="Nummerplaat" />
                    <br />
                    <input type="name" placeholder="Email" />
                    <br />
                    <input type="name" placeholder="Straat" />

                    <div className="input-box">
                        <input type="name" placeholder="Nummer" />
                        <input type="name" placeholder="Bus" />
                    </div>

                    <div className="input-box">
                        <input type="name" placeholder="Stad" />
                        <input type="name" placeholder="Postcode" />
                    </div>

                    <input className="input" type="name" placeholder="Telefoon" />
                    <br />
                    
                    <div className="input-box">
                        <input type="checkbox" />
                        <p>Hou mij op de hoogte wanneer er interessante acties zijn bij Q Team.</p>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default SignUpForm;