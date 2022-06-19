import React from 'react'
import card from 'public/images/card.jpeg';
import Image from 'next/image';

const Intro = () => {
  return (
    <div className='container-fluid my-5'>
                    <div className="card mb-3 bd">
                        <div className="row g-0">
                            <div className="col-md-4 shadow-1">
                                <Image src={card} className="img img-shadow" layout='intrinsic'alt='SAF Archery Academy Coach'/>
                            </div>
                            <div className=" shadow-1 col-md-8 img-shadow">
                                    <div className="card-body">
                                    <h1 className='display-4 center'>SAF Archery Academy</h1>
                                    <h6 className="card-title my-4 mx-1 fs-2">NIS Coach. Abhishek Kumar (National Player)</h6>
                                    <div className='mx-1'>
                                        <h6>The Art of Dhanurveda</h6>
                                        <p className="card-text">In modern times, it is a competitive sport and
                                            recreational activity.A person who practices archery is
                                            typically called an archer, bowman or toxophilite.***</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default Intro