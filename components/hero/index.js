import React from 'react'
import TimeCountDown from '../countdown'
import hImg1 from '/public/images/slider/oluUzaOriginal.png'
import Image from 'next/image'


const Hero = (props) => {
    return (
        <section className="static-hero" id='home'>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-8 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div data-swiper-parallax="300" className="slide-title">
                                        <h2>Olivier <span>&</span> Laura</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <h1 className='Gusaba'>The Parents of Laura Uzamukunda & Olivier Nsengiyumva would love your presence to our Traditional Rwandan Wedding: Gusba na Gukwa</h1>
                                    </div>
                                    <div className="wpo-wedding-date">
                                        <div className="clock-grids">
                                            <h1 className='SaveDate'>Save the Date</h1>
                                            <h3 className ="weddingDate">07-06-2024</h3>
                                            <h6>Please RSVP by 03-29-2024</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <Image src={hImg1} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
