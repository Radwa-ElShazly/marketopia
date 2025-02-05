import React from 'react'
import Footer from '../footer/footer'
import { MdArrowForwardIos } from "react-icons/md";
import style from './style.module.css'


export default function Login() {
  return <> <div className="loginPage">
      <div className={style.bgLinear}>
<div className="container pb-5">

<div className="title">
      <div className="subtitle text-muted mb-3 mt-2">
      Home 
      <MdArrowForwardIos />
      <span className='fw-bold'>Login & Register</span>
    </div>
    <h2 className='h1 fw-bold'>Login & Register</h2>
</div>


    </div>
  </div>


  <div className="container">

    <div className="row">
      <div className="col-md-6">
      <div className="content-register px-3">
                    
                    <div className={style.item}>
                        <div className="titles mt-3 mb-4">
                            <h3 className="fw-bold">Register</h3>
                        </div>
                        
                        <div className="form-group position-relative mb-4">
                            <div className="input-icon position-absolute end-0  me-4 mt-1 text-body-tertiary">
                                
                            </div>
                            <input id="un" type="text" placeholder="UserName" className="form-input form-control rounded-0 shadow-none mb-0"/>
                        </div>
                        
                        <div className="form-group position-relative mb-4">
                            <div className="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                               
                            </div>
                            <input id="ue" type="email" placeholder="Email address" className="form-input form-control rounded-0 shadow-none"/>

                        </div>
                        
                        <div className="form-group position-relative mb-4 pb-1">
                            <div className="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                                
                            </div>
                            <input id="up" type="password" name="password" placeholder="Password" className="form-control rounded-0 shadow-none"/>
                        </div>

                        <div id="btnSignUp" >
                            <a type="button" className={style.subBtn} href="#">SignUp</a>
                        </div>


                    </div>
                </div>
      </div>
      <div className="col-md-6">
      <div className="content-login px-3">
                    
                    <div className={style.item}>
                        <div className="titles mt-3 mb-4">
                            <h3 className="fw-bold">Login</h3>
                        </div>
                        
                        <div className="form-group position-relative mb-4">
                            <div className="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                               
                            </div>
                            <input id="ue" type="email" placeholder="Email address" className="form-input form-control rounded-0 shadow-none"/>

                        </div>
                        
                        <div className="form-group position-relative mb-4 pb-1">
                            <div className="input-icon position-absolute end-0 me-4 mt-1 text-body-tertiary">
                                
                            </div>
                            <input id="up" type="password" name="password" placeholder="Password" className="form-control rounded-0 shadow-none"/>
                        </div>


                        <div className="form-check mb-4">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                          <label className="form-check-label" for="flexCheckDefault">
                            Remember Me
                          </label>
                        </div>

                        <div id="btnSignUp" >
                            <a type="button" className={style.subBtn} href="#">Login</a>
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
