"use client";
import React, { useState } from 'react';
import { data } from './data';
import TestimonialCard from './TestimonialCard';
import "./TestimonialComp.scss";

function TestimonialComp() {

  const [selectedCard, setSelectedCard] = useState(0);

  const navigateFunc = (type: string): void => {
    if (type === "prev") {
      if (selectedCard >= 1) setSelectedCard((prev) => prev - 1); else { setSelectedCard(data.length-1); }
    } else {
      if (selectedCard < data.length-1) { setSelectedCard((prev) => prev + 1); } else { setSelectedCard(0); }
    }
  }

  return (
    <div className='TestimonialComp'>
      <div className='TestimonialComp_img'>
        <img src='/testimonialImg/testimonialIcon.svg' />
      </div>

      <div className='TestimonialComp_cardWrapper'>
        {
          data.map((elm, ix) => (
            <>{selectedCard === ix && <TestimonialCard key={ix} navigateFunc={navigateFunc} msg={elm.msg} imgSrc={elm.imgSrc} name={elm.name} />}</>
          ))
        }
      </div>

    </div>
  )
}

export default TestimonialComp;