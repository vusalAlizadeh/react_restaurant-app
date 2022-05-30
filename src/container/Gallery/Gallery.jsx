import React,{useRef} from 'react';
import { SubHeading } from '../../components';
import './Gallery.css';
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

const Gallery = () => {
  const scrollRef = useRef(null)

  const SlideContent=(direction)=>{
    
    const {current}=scrollRef
    if(direction === 'left'){
      current.scrollLeft-=300
    }else{
      current.scrollLeft+=300
    }
    
  }
  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className='p__opensans' style={{color:'#AAA', margin: "2rem 0 1rem 0"}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>

      <div className='app__gallery-images'>
        <div className="app__gallery-images-container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image,index)=>(
            <div className='gallery-image-card flex__center' key={index * Math.random()*1000}>
              <img src={image} alt="gallery"/>
              <BsInstagram className='gallery-icon'/>
            </div>
          ))}
        </div>
        <div className="app__gallery-images-arrows">
          <BsArrowLeftShort className='gallery-images-icon' onClick={()=>SlideContent('left')}/>
          <BsArrowRightShort className='gallery-images-icon' onClick={()=>SlideContent('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
