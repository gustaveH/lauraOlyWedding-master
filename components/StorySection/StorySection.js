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
                <p className='ourLoveStory'>Welcome to our celebration of love that transcends distance! Our love story began with a connection, sparked by a beloved family friend and Olivier’s aunt. Little did we know, she saw the potential that would blossom into a deep bond and everlasting love. As we prepare to embark on this journey, we invite you to join us in celebrating our traditional ceremony, a harmonious celebration of Rwandan tradition. As we unite our lives in our tapestry of cultures and shared love orchestrated by God, will look forward to your presence.
                </p>
                <h4> Oli & Uza</h4>
            </div>
        </section>
    )
}


export default StorySection;