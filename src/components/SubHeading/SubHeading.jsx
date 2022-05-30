import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div className='header__subheading' style={{ marginBottom: '1rem' }}>
    <p className='p__cormorant'>{title}</p>
    <img src={images.spoon} alt="spoon img" className="spoon__img" />
  </div>
);

export default SubHeading;
