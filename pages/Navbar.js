import React, { Component } from 'react';
import { FcHome } from "react-icons/fc";
import { GiSportMedal } from "react-icons/gi";
import { FcGallery } from "react-icons/fc";
import { FcOk } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import toggler from 'public/images/toggler.png';
import Link from 'next/link';
import Image from 'next/image';

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar1 navbar-expand-xl">
        <nav className="navbar navbar-expand-xl">
          <div className="container-fluid">          
            <div className='mx-0 togg'>
            <div>
            <Image className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" src={toggler} height={40} width={40} alt='Academy'/>
            </div>
            <div className='logo'>
            <a className="s">S</a>
            <a className="a">A</a>
            <a className="f">F</a>
            <a className="g">A</a>
            <a className="o">r</a>
            <a className="oo">c</a>
            <a className="gg">h</a>
            <a className="l">e</a>
            <a className="e">r</a>
            <a className="oo">y</a>
            </div>
          </div>
            <div className=" collapse menu navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-2 me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active mx-1 text-white" aria-current="page" href='/'><a>Home<FcHome /></a></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active mx-1 text-white" href="/Achievements"><a>Achievements<GiSportMedal /></a></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active mx-1 text-white" aria-current="page" href="/Gallery"><a>Gallery<FcGallery/></a></Link>
                </li>
                <li className="nav-item ">
                  <Link className="nav-link active mx-1 text-white" aria-current="page" href="/About"><a>About<FcOk /></a></Link>
                </li>
              </ul>

            </div>
            <div className='social '>
              <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/SAF_Archery' className='mx-2'><FaTwitter /></a>
              <a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/pages/category/Archery-Range/S-A-F-Archery-Academy-1409270862541956/" className='mx-2'><FaFacebook /></a>
              <a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/saf_archers/channel/?hl=en" className='mx-2'><FaInstagram /></a>
              <a target='_blank' rel='noopener noreferrer' href="tel:+91 798 591 8690" className='mx-2'><FaPhone /></a>
              <a target='_blank' rel='noopener noreferrer' href="mailto:kumarabhishek01071997@gmail.com" className='mx-2'><GrMail /></a>
              <a target='_blank' rel='noopener noreferrer' href="https://goo.gl/maps/DMMrCdgohGQiKQKm9" className='mx-1'><ImLocation2 /></a>
            </div>
          </div>
        </nav>
      </nav>
    )
  }
}

export default Navbar
