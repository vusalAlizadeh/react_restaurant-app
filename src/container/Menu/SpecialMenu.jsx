import React from 'react';
import './SpecialMenu.css';
import SubHeading from '../../components/SubHeading/SubHeading';
import Menuitem from '../../components/Menuitem/MenuItem';
import {images,data} from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding' id="menu">
    <div className='app__specialMenu-header flex__center'>
      <SubHeading title="Menu That Fits Your Palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>
    <div className='app__specialMenu-menu'>
      <div className='app__specialMenu-menu-wines'>
        <h1 className='app__specialMenu-menu-heading'>Wine & Beer</h1>
        {data.wines.map((wine,index)=>(
          <Menuitem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags}/>
        ))}
      </div>

      <div className='app__specialMenu-img flex__center'>
        <img src={images.menu} alt="menu img"/>
      </div>

      <div className='app__specialMenu-menu-cocktails'>
        <h1 className='app__specialMenu-menu-heading'>Cocktails</h1>
        {data.cocktails.map((cocktail,index)=>(
          <Menuitem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
        ))}
      </div>
   
    </div>

    

    <button type="button" className="custom__button">View More</button>
  </div>
);

export default SpecialMenu;
