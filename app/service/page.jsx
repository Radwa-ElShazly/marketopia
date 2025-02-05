import React from 'react'
import Footer from '../footer/footer'
import { MdArrowForwardIos } from "react-icons/md";
import style from './style.module.css'
export default function page() {
  return<>
  <div className={style.bgLinear}>



<div className="container pb-5">

<div className="title">
      <div className="subtitle text-muted mb-3 mt-2">
      Home 
      <MdArrowForwardIos />
      <span className='fw-bold'>Services</span>
    </div>
    <h2 className='h1 fw-bold'>All Services</h2>
</div>


<div className={style.service}>
<div className="row gy-4">
        <div className="col-lg-4 col-md-6 px-4">
        <div className={style.item}>
       
       <div className="card-body text-center">
        
          <h3 className={style.number}>نظام غذائي test</h3>
      

        <a href="#" className={style.subBtn}>See Now</a>
       </div>
      
      </div>
        </div>


        <div className="col-lg-4 col-md-6 px-4">
        <div className={style.item}>
       
       <div className="card-body text-center">
        
          <h3 className={style.number}>workout1</h3>
      

        <a href="#" className={style.subBtn}>See Now</a>
       </div>
      
      </div>
        </div>



        <div className="col-lg-4 col-md-6 px-4">
        <div className={style.item}>
       
       <div className="card-body text-center">
        
          <h3 className={style.number}>workout2</h3>
      

        <a href="#" className={style.subBtn}>See Now</a>
       </div>
      
      </div>
        </div>


        <div className="col-lg-4 col-md-6 px-4">
        <div className={style.item}>
       
       <div className="card-body text-center">
        
          <h3 className={style.number}>get fit plan</h3>
      

        <a href="#" className={style.subBtn}>See Now</a>
       </div>
      
      </div>
        </div>


      </div>
</div>

    </div>

<Footer />
  </div>
  
  </>
}
