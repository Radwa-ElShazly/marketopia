import React from 'react'
import Image from 'next/image'
import myLogo from '../images/dac-png-1.png'
import Link from 'next/link'
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import style from './style.module.css';


export default function Footer() {
  return <>
<section className={style.footer}>
<div className="container pt-5">
    <div className="row">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="contactLeft">
          <Link className="navbar-brand" href="#">
             <Image width={200} src={myLogo} alt="mylogo"/>
          </Link>

          <div className="socialMediaIcon d-flex my-3 ps-3">
            <div className={style.socialIcon}>
               <SlSocialFacebook  className={style.contactIcon}/>
            </div>

             <div className={style.socialIcon}>
             <CiTwitter className={style.contactIcon}/>
            </div>

            <div className={style.socialIcon}>
            <FaInstagram className={style.contactIcon}/>
            </div>        
          
          
          </div>
          <div className={style.contactBtn}>
            <Link className={style.contactLink}  href={'/'}>
                <span className={style.textBtn}>Contact With Us</span>
                <span className='mb-1 ms-1'><FaArrowRight /></span>
            </Link>
          </div>
          </div>

        </div>

        <div className="col-lg-4 col-md-6">
          <div className="links">
            <h4 className='fs-5 fw-bold mb-4'>Useful links</h4>
            <div className={style.navItem}>
                  <Link className={style.link}   href={'/'}>
                    <p>About User</p>
                  </Link>
            </div>



            <div className={style.navItem}>
                  <Link className={style.link} href={'/'}>
                  <p>Privacy policy</p>
                  </Link>
            </div>
 
          </div>
         </div>
        
         <div className="col-lg-4 col-md-6">
             <div className="contactRight">
                <h4 className='fs-5 fw-bold mb-4'>Get Contact</h4>
                <div className="info">
                    <div className="phone text-muted mb-2">
                        <span className='h6'>Phone :</span>
                        <div className={style.navItem}>
                          <Link className={style.navLink} href={'/'}>  <span>01012235468 </span></Link>
                        </div>
                        
                    </div>

                    <div className="email text-muted">
                        <span  className='h6'>Email :</span>
                        <div className={style.navItem}>
                          <Link className={style.navLink} href={'/'}> <span>test@gmail.com</span></Link>
                        </div>
                        
                    </div>                   
                </div>
             </div>
         </div>

    </div>

    <div className={style.copyRight}>
        <p>Copyright © 2024 <span>Marketopia</span>  Team.All Rights Reserved</p>
    </div>
</div>
</section>
  </>
}
