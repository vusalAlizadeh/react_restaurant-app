import React from 'react';
import './Header.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour"/>
      <h1 className='app__wrapper_title'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin:'2rem 0'}}>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis 
        Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus
      </p>
      <button className='custom__button wrapper_btn'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome img"/>
    </div>
  </div>
);

export default Header;
