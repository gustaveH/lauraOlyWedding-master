import { useForm, ValidationError } from '@formspree/react';
import SectionTitle from '../../components/SectionTitle'


const RSVP = (props) => {

        const [state, handleSubmit] = useForm("mwkdznbj");
      
        if (state.succeeded) {
          return <h1> Thank you! </h1>;
        }

    return (
        <section className={`wpo-contact-section ${props.pt}`} id="RSVP">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="wpo-contact-form-area">
                        <SectionTitle MainTitle={'Are you attending?'} />

                        <form onSubmit={handleSubmit} className="contact-validation-active" >
                            <div className="form-field">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your Name" />
                                <ValidationError prefix="Name" field="name" errors={state.errors} />
                            </div>
                            <div className="form-field">
                                <input
                                    id="email"
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Your Email" />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>
                            <div className="form-field">
                                <input
                                    id="yes"
                                    type="text"
                                    name="yes"
                                    className="form-control"
                                    placeholder="Your response" />
                                <ValidationError prefix="Yes" field="yes" errors={state.errors} />
                            </div>
                            <div className="form-field">
                                <input
                                    id="no"
                                    type="text"
                                    name="no"
                                    className="form-control"
                                    placeholder="Your response" />
                                <ValidationError prefix="Yes" field="yes" errors={state.errors} />
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit Now</button>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RSVP;