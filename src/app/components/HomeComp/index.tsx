import React from 'react';
import "./HomeComp.scss";
import ButtonComp from '../ButtonComp';
import PaymentSolutionSection from './PaymentSolutionSection';
import WhyChooseUs from './WhyChooseUs';
import TestimonialComp from './TestimonialComp';
import GetInTouch from './GetInTouch';
function HomeComp() {
  return (
    <div className='Home'>
      <div className='Home_wrapper'>
        <h1 className='Home_wrapper_heading'>
          Seamless Online   Payments <br /> for India
        </h1>
        <p className='Home_wrapper_para'>Effortless mobile recharge and bill  payments at your fingertips with <br /> Vearn Tech.</p>
        <ButtonComp type={"button"} text={"get started - it's free"} />
      </div>

      <PaymentSolutionSection/>
      <GetInTouch/>
      <WhyChooseUs/>
      <TestimonialComp/>
    </div>
  )
}

export default HomeComp