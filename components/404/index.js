import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/error-404.svg'


const Error = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt=""/>
                            </div>
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

export default Error;