"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import transformation from '../images/66f14bbce0ddb_Skinny-Fat-Transformation.jpeg'
import style from './style.module.css';
import Footer from '../footer/footer';
import Image from 'next/image';
import Progress from '../progress/progress';
import { useRouter } from 'next/router';


export default function Home() {

   const texts = ["With GYM Instructor.", "With Follow YLifeStyle"];
    const [index, setIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }, 2000); 
  
      return () => clearInterval(interval);
    }, []);



  const [percentages, setPercentages] = useState({
    progress1: 80,
    progress2: 60,
    progress3: 70,
    progress4: 95,
  });


  return <> 
  <div className={style.bgHome}>
    <div className={style.layer}>
      <div className="container d-flex flex-column justify-content-center vh-100">
            <p className={style.subTitleHome}>BEST SELLER</p>
            <h1 className={style.mainTitle}>Hey! Build Your Body
            <div className={style.animaText} >
                  <motion.h1
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    style={{ fontSize: "3.4rem", fontWeight: "bold", }}
                  >
                    {texts[index]}
                  </motion.h1>
          </div>
            </h1>








            <div className="d-flex">
                  <span>
                  <button className={style.btn}>Contant us</button>
                </span>
                <span>
                  <button className={style.btn}>Calculate Calories</button>
                </span>
            </div>
      </div>


    </div>

  </div>


<div className="manners py-5">

<div className="title text-center py-5">
   <h2 className={style.subTitle}>Why <span className={style.themeGradient}>Choose</span> Us?</h2>
   <p className='text-muted'>Are You Want to <span className='fw-bold'>Change Your Life?</span> </p>
</div>

  <div className="container"> 
       <div className="row gy-4 pb-5">
        <div className="col-lg-3 col-md-6 ">
          <div className="manner d-flex flex-column align-items-center">
            <Progress  percentage={80} />
            <h3 className='fw-light h4 my-3 '>GYM</h3>
          </div>
        </div>


        <div className="col-lg-3 col-md-6">
          <div className="manner d-flex flex-column align-items-center">
          <Progress percentage={60} />
          <h3 className='fw-light h4 my-3 '>Yoga</h3>
          </div>
        </div>


        <div className="col-lg-3 col-md-6">
          <div className="manner d-flex flex-column align-items-center">
          <Progress percentage={70} />
          <h3 className='fw-light h4 my-3 '>NUTRITION</h3>
          </div>
        </div>


        <div className="col-lg-3 col-md-6">
          <div className="manner d-flex flex-column align-items-center">
          <Progress percentage={95} />
          <h3 className='fw-light h4 my-3 '>RUNNING</h3>
          </div>
        </div>
       </div>
        
        
        
        
      
    </div>  
</div>



  <div className={style.fixedBg}>
  </div>




    <div className="tansformation my-5 py-5">
    <div className="title text-center">
    <h2 className='fw-bold mb-5'>Transformation</h2>
</div>
       
       <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 px-4">
            <div className={style.trasformContent}>
              <Image className={style.trasformImage} src={transformation} alt='tansformation'/>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 px-4">
            <div className={style.trasformContent}>
              <Image className={style.trasformImage} src={transformation} alt='tansformation'/>
            </div>
          </div>


          <div className="col-lg-4 col-md-6 px-4">
            <div className={style.trasformContent}>
              <Image className={style.trasformImage} src={transformation} alt='tansformation'/>
            </div>
          </div>

          
        </div>
       </div>
    </div>



    <section className='howToChoose'>
    <div className="title text-center py-5">
   <h2 className={style.subTitle}>Choose The <span className={style.themeGradient}>Program</span></h2>
   <p className='text-muted'>Are You Want to <span className='fw-bold'>Change Your Life?</span> </p>
</div>

  
    <div className="container pb-5">
      <div className="row gy-4">
        <div className="col-lg-4 col-md-6 px-4">
        <div className={style.item}>
       <div className="card border-0 text-center" style={{width: '18rem'}}>
       <div className="card-body">
        <div className="content">
          <p className='h3'>Monthy</p>
          <h3 className={style.number}>200</h3>
        </div>
         <h6 className="card-title text-start text-muted my-4 mb-5">monthly offer</h6>
        <a href="#" className={style.subBtn}>Subscribe Now</a>
       </div>
       </div>
      </div>
        </div>


        <div className="col-lg-4 col-md-6 px-4">
        <div className={style.item}>
       <div className="card border-0 text-center" style={{width: '18rem'}}>
       <div className="card-body">
        <div className="content">
          <p className='h3'>yearly</p>
          <h3 className={style.number}>500</h3>
        </div>
         <h6 className="card-title text-start text-muted my-4 mb-5">yearly</h6>
        <a href="#" className={style.subBtn}>Subscribe Now</a>
       </div>
       </div>
      </div>
        </div>
      </div>
    </div>

    </section>


    <Footer/>
  </>
}
