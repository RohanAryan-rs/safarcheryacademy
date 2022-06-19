import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
const Footer = () => {
    return (
        <div className="card footer">
            <div className="row g-0 ">
                <div className="col-md-6 ">
                    <div className="card-body text-white">
                        <h4>SAF Archery Academy</h4>
                        <p className='my-4'>*** In modern times, it is a competitive sport and recreational activity.A person who practices archery is
                            typically called an archer, bowman or toxophilite.***</p>
                            <div className='text'>
                            <p className='text-danger fs-6'><em>Classes available in your city Lucknow</em></p>
                            </div>
                        <p><a target='_blank' rel='noopener noreferrer' href="https://twitter.com/SAF_Archery"><FaTwitter />@SAF_Archery</a></p>
                        <p><a target='_blank' rel='noopener noreferrer' href="https://www.facebook.com/pages/category/Archery-Range/S-A-F-Archery-Academy-1409270862541956/"><FaFacebook />SAF Archery Academy</a></p>
                        <p><a target='_blank' rel='noopener noreferrer' href="https://www.instagram.com/saf_archers/channel/?hl=en"><FaInstagram />saf_archers</a></p>
                        <p><a target='_blank' rel='noopener noreferrer' href="tel:+91 798 591 8690" ><FaPhone />+91 798 591 8690</a></p>
                        <p><a target='_blank' rel='noopener noreferrer' href="mailto:kumarabhishek01071997@gmail.com"><GrMail />kumarabhishek01071997@gmail.com</a></p>
                        <p><a target='_blank' rel='noopener noreferrer' href="https://goo.gl/maps/DMMrCdgohGQiKQKm9"><ImLocation2 />SAF Archery Ground Armapur Estate,
                            Kanpur, Uttar Pradesh 208022</a></p>
                            
                    </div>
                </div>
                <div className="col-md-6">
                    <div className='card-body'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2395.1704848559193!2d80.27031394921588!3d26.46130318566808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4970bc124a47%3A0xd0dcdd2dca016180!2sSAF%20Archery%20Ground!5e1!3m2!1sen!2sin!4v1653072589437!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className='bg-dark'>
                <p className='text-light mx-3'>— Sponsored by Small Arms Factory | Gun Factory <br/>— Affiliated to District Archery Association</p>
            <p className='copyright'>Copyright &copy; SAF Archery Academy</p>
            </div>
        </div>
    )
}

export default Footer
