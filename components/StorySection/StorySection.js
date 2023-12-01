import React from 'react';
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/story/1.jpg'
import sImg2 from '/public/images/story/2.jpg'
import sImg3 from '/public/images/story/3.jpg'

import shape1 from '/public/images/rsvp/shape1.png'
import shape2 from '/public/images/rsvp/shape2.png'
import Image from 'next/image';

const StorySection = (props) => {


    return (
        <section className="story-section section-padding">
            <div>
                <h1>A Love Story</h1>
                <p className='ourLoveStory'>Welcome to the celebration of love that transcends distance! Our love story began with the magic of connection, sparked by a beloved friend of my family and Olivier’s aunt. Who saw the potential for something extraordinary. Little did we know that this introduction would blossom into a deep bond, leading us down the path of love and commitment. As we prepare to embark on this journey together, we invite you to join us in celebrating our traditional wedding, a harmonious celebration of Rwandan traditions. Your presence will make our special day even more memorable as we unite our lives in a tapestry of cultures and shared love orchestrated by God.
                </p>
                <h4 className="fi flaticon-dove"> Olivier & Laura</h4>
            </div>
        </section>
    )
}


export default StorySection;