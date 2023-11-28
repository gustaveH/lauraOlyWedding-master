import { useForm, ValidationError } from '@formspree/react';
import Error from '../404';
import SectionTitle from '../../components/SectionTitle'


const RSVP = (props) => {

        const [state, handleSubmit] = useForm("xpzkoqgy");
      
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
                                <p>Will you be attending?</p>
                                <input
                                    id="Yes/No"
                                    type="text"
                                    name="Yes/No"
                                    className="form-control"
                                    placeholder="Yes/No" />
                                <ValidationError prefix="Your response" field="yes" errors={state.errors} />
                            </div>
                            <div className="form-field">
                                <p>Please list names of the party attending.</p>
                                <input
                                    id="Attendies"
                                    type="text"
                                    name="Attendies"
                                    className="form-control"
                                    placeholder="John Doe, Jane Doe" />
                                <ValidationError prefix="Your response" field="yes" errors={state.errors} />
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