import React from 'react'
import "./ContactComp.scss";

function ContactComp() {
  return (
    <div className='ContactComp'>
      <div className='ContactComp_left' data-aos="fade-right">
        <h1 className='ContactComp_left_head'>
          Contact us
        </h1>
        <p className='ContactComp_left_para'>Feel free to contact us with any questions or concerns. You can use the form on our website or email us directly. We appreciate your interest and look forward to hearing from you.</p>
        <div className='ContactComp_left_contactDetailWrapper'>
          <p className='ContactComp_left_contactDetailWrapper_head'>Email</p>
          <p className='ContactComp_left_contactDetailWrapper_detail'>info@vearntech.online</p>
        </div>
        <div className='ContactComp_left_contactDetailWrapper'>
          <p className='ContactComp_left_contactDetailWrapper_head'>Address</p>
          <p className='ContactComp_left_contactDetailWrapper_detail'> 10th Floor Tower B Windsor IT Park Sector 125,
            <br /> Noida, Uttar Pradesh 201313</p>
        </div>
      </div>
      <div data-aos="fade-left" className='ContactComp_right'></div>
    </div>
  )
}

export default ContactComp