import React from 'react'
import image1 from 'public/images/image1.jpg';
import image2 from 'public/images/image2.jpg';
import image3 from 'public/images/image3.jpg';
import Image from 'next/image';
import Headline from './Headline';


function Carousel() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
          <Headline/>
            <Image src={image1} layout='intrinsic' alt='saf archery academy' />
            <div className="carousel-caption text-light d-sm-block">
              <Image className='mx-1' src='/favicon.ico' height={60} width={70} alt='logo' />
                <h1 className='display-6 fs-4'>SAF Archery Academy</h1>            
              <h6>— D.T. Suzuki</h6>
              <p>“Fundamentally the marksman aims at himself.”</p>
            </div>
          </div>
          <div className="carousel-item">
          <Headline/>
            <Image src={image2} layout='intrinsic' alt='saf archery academy' />
            <div className="carousel-caption d-sm-block">
              <Image className='mx-1' src='/favicon.ico' height={60} width={70} alt='logo' />
              <h1 className='display-6 fs-4'>SAF Archery Academy</h1>   
              <h6>— Fred Bear</h6>
              <p>“The history of the bow and arrow is the history of mankind.”</p>
            </div>
          </div>
          <div className="carousel-item">
          <Headline/>
            <Image src={image3} layout='intrinsic' alt='saf archery academy' />
            <div className="carousel-caption text-light d-sm-block">
              <Image className='mx-1' src='/favicon.ico' height={60} width={70} alt='logo' />
              <h1 className='display-6 fs-4'>SAF Archery Academy</h1>
              <h6>— Henry Thoreau</h6>
              <p>“In the long run, you only hit what you aim at.”</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel