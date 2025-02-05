import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import myLogo from '../images/dac-png-1.png'
import style from './styles.module.css'
export default function Navbar() {
  return <>
<div className="langauge">
    <div className="dropdown bg-dark bg-gradient d-flex justify-content-end">
      <button className="btn btn-transparent dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false">
        EN
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
</div>
<nav className="navbar navbar-expand-lg bg-body-white">
  <div className="container-fluid px-5">
    <Link className="navbar-brand" href="#">
       <Image width={200} src={myLogo} alt="mylogo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className={style.navItem}>
          <Link className="nav-link active" aria-current="page" href="/home">Home</Link>
        </li>
        <li className={style.navItem}>
          <a className="nav-link active" aria-current="page" target="_self" rel="noopener noreferrer" href="/Aboutus.pdf">About</a>
        </li>
         <li className={style.navItem}>
          <Link className="nav-link active" aria-current="page" href="/service">Service</Link>
        </li>       
         <li className={style.navItem}>
          <a  className="nav-link active" aria-current="page" target="_self" rel="noopener noreferrer" href="https://ylife.marketopiasystems.com/store/products">Store</a>
        </li>


      </ul>
      <form className="d-flex">
      <button className="btn position-relative me-3">
        <FaShoppingCart className='mb-2' size={20}/>
        <span className="badge text-bg-primary mt-2 position-absolute top-25 start-100 translate-middle rounded-pill">0</span>
     </button>
     <Link href={'/login'}>
     <button className={style.btnNav} type="submit">Join Now</button>
     </Link>
        
      </form>
    </div>
  </div>
</nav>
  </>
}
