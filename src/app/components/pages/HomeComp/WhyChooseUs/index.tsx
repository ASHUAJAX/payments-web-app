import React from 'react'
import "./WhyChooseUs.scss";

function WhyChooseUs() {
  return (
    <div className='WhyChooseUs'>
        <div className='WhyChooseUs_headParaWrapper' data-aos="zoom-in">
        <h1>Empowering Your Online Payments</h1>
        <p>Vearn Tech simplifies online payments for Indian customers, offering  seamless solutions for mobile recharges, bill payments, and more. Experience convenience and security with every transaction.</p>
        </div>
        <div className='hr'></div>
<div className='WhyChooseUs_counterWrapper' data-aos="fade-up" >
    <div className='WhyChooseUs_counterWrapper_card'>
        <h1>150+</h1>
        <p>Secure Payments</p>
    </div>
    <div className='WhyChooseUs_counterWrapper_card' data-aos="fade-up">
        <h1>15</h1>
        <p>Trusted by Millions</p>
    </div>
</div>
    </div>
  )
}

export default WhyChooseUs