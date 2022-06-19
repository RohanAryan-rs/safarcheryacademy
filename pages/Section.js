import React from 'react'
import card1 from 'public/images/card1.jpg';
import card2 from 'public/images/card2.jpg';
import card3 from 'public/images/card3.jpg';
import card4 from 'public/images/card4.jpg';
import Image from 'next/image';

function Section() {
  return (
    <div className='section bg-dark w-auto h-auto'>
      <p className='text-light ph3 mb-5'>*** The Art of Dhanurveda ***</p>
      <div className="w-100 mx-1 row row-cols-1 row-cols-lg-4 row-cols-md-4 row-cols-sm-2 g-4">
        <div className="col my-1">
          <div className="card shadow-1">
            <Image src={card1} className="card-img-top" layout='intrinsic' alt='SAF Archery Academy Card' />
            <div className="card-body">
              <h5 className="card-title">— Ralph Waldo Emerson</h5>
              <p className="card-text">“The way to write is to throw your body at the mark when all your arrows are spent.”</p>
            </div>
          </div>
        </div>
        <div className="col my-3">
          <div className="card shadow-1">
            <Image src={card2} className="card-img-top" layout='intrinsic' alt='SAF Archery Academy Card' />
            <div className="card-body">
              <h5 className="card-title">— Sebastien de Castell, Traitor`s Blade</h5>
              <p className="card-text">“The archer is the true weapon; the bow is just a long piece of wood.”</p>
            </div>
          </div>
        </div>
        <div className="col my-4">
          <div className="card shadow-1">
            <Image src={card3} className="card-img-top" layout='intrinsic' alt='SAF Archery Academy Card' />
            <div className="card-body">
              <h5 className="card-title">— Geena Davis</h5>
              <p className="card-text"> “The main concept about archery is a battle with yourself. You can ruin it all. Once you have learned the technique, the point is to recreate the perfect technique over and over and over.”</p>
            </div>
          </div>
        </div>
        <div className="col my-5">
          <div className="card shadow-1">
            <Image src={card4} className="card-img-top" layout='intrinsic' alt='SAF Archery Academy Card' />
            <div className="card-body">
              <h5 className="card-title">— Henry Wadsworth Longfellow</h5>
              <p className="card-text">“If you would hit the mark at long range, you must aim a little above it: every arrow that flies feels the pull of the earth and Archery does not get difficult or hard to understand until the arrow misses.”</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section