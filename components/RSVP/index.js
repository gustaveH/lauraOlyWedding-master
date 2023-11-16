import { useForm, ValidationError } from '@formspree/react';
import Error from '../404';
import SectionTitle from '../../components/SectionTitle'


const RSVP = (props) => {

        const [state, handleSubmit] = useForm("mwkdznbj");
      
        if (state.succeeded) {
          return (
            <div className='container'>
                <Error/>
            </div>
          );
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
                                <p>I will make it</p>
                                <input
                                    id="yes"
                                    type="text"
                                    name="yes"
                                    className="form-control"
                                    placeholder="Yes" />
                                <ValidationError prefix="Yes" field="yes" errors={state.errors} />
                            </div>
                            <div className="form-field">
                                <p>I won't make make it</p>
                                <input
                                    id="no"
                                    type="text"
                                    name="no"
                                    className="form-control"
                                    placeholder="No" />
                                <ValidationError prefix="Yes" field="yes" errors={state.errors} />
                            </div>
                            <div className="submit-area">
                                <button type="submit" className="theme-btn">Submit</button>
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </section>
    )
}
export default RSVP;