import React, { useState } from 'react';
import { useForm, ValidationError } from "@formspree/react";
import SectionTitle from '../../components/SectionTitle';

export const RSVP = (props) => {

    // const [forms, setForms] = useState({
    const [state, handleSubmit] = useState({
        name: '',
        email: '',
        attend: '',
    });
    const [validator] = useForm("xrgroppr");
    const changeHandler = e => {
        handleSubmit({ ...state, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            handleSubmit({
                name: '',
                email: '',
                attend: '',
            });
        } else {ƒ
            validator.showMessages();
        }
    };

    return (
        <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="wpo-contact-form-area">
                        <SectionTitle MainTitle={'Are you attending?'} />

                        <form onSubmit={(e) => handleSubmit(e)} className="contact-validation-active">
                            <div className="form-field">
                                <input
                                    value={forms.name}
                                    type="text"
                                    name="name"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Name" />
                                {validator.message('name', state.name, 'required|alpha_space')}
                            </div>
                            <div className="form-field">
                                <input
                                    value={state.email}
                                    type="email"
                                    name="email"
                                    onBlur={(e) => changeHandler(e)}
                                    onChange={(e) => changeHandler(e)}
                                    className="form-control"
                                    placeholder="Your Email" />
                                {validator.message('email', state.email, 'required|email')}
                            </div>
                            <div className="radio-buttons">
                                <p>
                                    <input type="radio" id="attend" name="radio-group" defaultChecked />
                                    <label htmlFor="attend">Yes, I will be there</label>
                                </p>
                                <p>
                                    <input type="radio" id="not" name="radio-group" />
                                    <label htmlFor="not">Sorry, I can’t come</label>
                                </p>
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
