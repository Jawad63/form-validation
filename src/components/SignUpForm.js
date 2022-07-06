import React from "react";
import { useState } from "react";
import logo from '../images/logo.png';
import footerImage from '../images/Image.png';

const SignUpForm = () => {

    // Object with empty values that will be getting updated through formValues. 
    const initialValues = {
        firstname: "",
        lastname: "",
        numberplate: "",
        email: "",
        street: "",
        number: "",
        bus: "",
        city: "",
        postcode: "",
        telephone: "",
    };

    // To bind the all the Input fields with 
    const [formValues, setFormValues] = useState(initialValues);
    const [formError, setFormError] = useState({});
     

    // This is going to Update the values of Input field:
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]:value });
    };

    // This is to validate the form:
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError(validate(formValues));
        console.log(formValues);
    }



    // function that validates the values: 
    const validate = (values) => {
        const errors = {};
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

        if (!values.firstname) {
            errors.firstname = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.firstname = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.lastname) {
            errors.lastname = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.lastname = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.numberplate) {
            errors.numberplate = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.numberplate = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.email) {
            errors.email = (<i className="fa-solid fa-circle-xmark"></i>);
        } else if (!regex.test(values.email)) {
            errors.email = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.email = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.street) {
            errors.street = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.street = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.number) {
            errors.number = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.number = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.bus) {
            errors.bus = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.bus = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.city) {
            errors.city = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.city = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.postcode) {
            errors.postcode = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.postcode = (<i className="fa-solid fa-circle-check"></i>);
        }

        if (!values.telephone) {
            errors.telephone = (<i className="fa-solid fa-circle-xmark"></i>);
        } else if (values.telephone.length < 10) {
            errors.telephone = (<i className="fa-solid fa-circle-xmark"></i>);
        } else if (values.telephone.length > 13) {
            errors.telephone = (<i className="fa-solid fa-circle-xmark"></i>);
        } else {
            errors.telephone = (<i className="fa-solid fa-circle-check"></i>);
        }

        return errors;
    };





    return (

        <><></><pre>{ JSON.stringify(formValues, undefined, 2)}</pre>
        
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


            <form onSubmit={handleSubmit}>

                <div className="flex__container">

                    <div className="row">
                        <div className="flex__row">
                            <input placeholder="Voornaam" name="firstname" value={formValues.firstname} onChange={handleChange} />
                            <i>{formError.firstname}</i>
                        </div>

                        <div className="flex__row">
                            <input placeholder="Naam" name="lastname" value={formValues.lastname} onChange={handleChange} />
                            <i>{formError.lastname}</i>
                        </div>
                    </div>



                    <div className="flex__line">
                        <input placeholder="Nummerplaat" name="numberplate" value={formValues.numberplate} onChange={handleChange}/>
                        <i>{formError.numberplate}</i>
                    </div>

                    <div className="flex__line">
                        <input type="email" placeholder="Email" name="email" value={formValues.email} onChange={handleChange} />
                        <i>{formError.email}</i>
                    </div>


                    <div className="flex__line">
                        <input placeholder="Straat" name="street" value={formValues.street} onChange={handleChange}/>
                        <i>{formError.street}</i>
                    </div>

                    <div className="row">
                        <div className="flex__row">
                            <input placeholder="Nummer" name="number" value={formValues.number} onChange={handleChange} />
                            <i>{formError.number}</i>
                        </div>
                        <div className="flex__row">
                            <input placeholder="Bus" name="bus" value={formValues.bus} onChange={handleChange} />
                            <i>{formError.bus}</i>
                        </div>
                    </div>
                    

                    <div className="row">
                        <div className="flex__row">
                            <input placeholder="Stad" name="city" value={formValues.city} onChange={handleChange}/>
                            <i>{formError.city}</i>
                        </div>
                        <div className="flex__row">
                            <input placeholder="Postcode" name="postcode"  value={formValues.postcode} onChange={handleChange}/>
                            <i>{formError.postcode}</i>
                        </div>
                    </div>



                    <div className="flex__line">
                        <input placeholder="Telefoon" name="telephone" value={formValues.telephone} onChange={handleChange}/>
                        <i>{formError.telephone}</i>
                    </div>


                    <div className="flex__checkbox">
                        <input type="checkbox" className="checkbox" />
                        <p>Hou mij op de hoogte wanneer er interessante acties zijn bij Q Team.</p>
                    </div>


                    <div className="btn">
                        <button type="submit">Bevestigen</button>
                    </div>

                </div>



            </form>




            <div className="footer__image">
                <img src={footerImage} className="image" alt="" />
            </div>

        </div></>
    )
}

export default SignUpForm;