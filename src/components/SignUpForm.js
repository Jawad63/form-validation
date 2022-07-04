import React from "react";
import logo from '../images/logo.png';

const SignUpForm = () => {
    return (
        <div className="container">

            <div className="img">
                <img src={logo} />
            </div>

            <h1><span className="italic-text">vul uw</span> gegevens aan</h1>

            <div className="form">

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






        </div>
    )
}

export default SignUpForm;