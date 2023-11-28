import React from 'react'
import Link from 'next/link'



const ThankYouRSVP = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error-message">
                                <h3>Thank You for, the response!</h3>
                                <Link href="/home" className="theme-btn-s3">Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ThankYouRSVP;