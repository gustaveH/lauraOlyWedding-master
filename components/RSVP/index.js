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
                                <select className="form-control" name="attending" id="attending" required="">
                                    <option value="" selected="" disabled="">Select</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="form-field">
                                <p>Number of people attending.</p>
                                <select className="form-control" name="People Attenting" id="plus" required="">
                                    <option value="0" selected="">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
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