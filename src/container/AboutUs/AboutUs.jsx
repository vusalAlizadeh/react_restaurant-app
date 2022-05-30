import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => (
  <div className='app__aboutus section__padding flex__center app__bg' id="about">
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter"/>
    </div>
    <div className="app__aboutus-info flex__center">
      <div className="app__aboutus-info-text">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} className="spoon__img" alt="spoon img"/>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
           Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique.
            In Sed Odio Nec Aliquet Eu Proin Mauris Et.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
      <img src={images.knife} alt="knife" className='flex__center knife-img'/>
      <div className="app__aboutus-history-text">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} className="spoon__img" alt="spoon img"/>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
           Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique.
            In Sed Odio Nec Aliquet Eu Proin Mauris Et.
        </p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>

    
  </div>
);

export default AboutUs;
