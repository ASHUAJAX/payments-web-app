import React from 'react'

interface PaymentCard {
    heading: string,
    para: string,
    type: string,
    imgSrc: string
}

function PaymentCard({ heading, para, type, imgSrc }: PaymentCard) {
    return (
        <div className={`PaymentCard ${type && 'reversedCard'}`}>
            <div className={"PaymentCard_imgWrapper"}>
                <img src={imgSrc} alt={heading} />
            </div>
            <div className={`PaymentCard_contentWrapper ${type && 'alignRight'}`} >
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
        </div>
    )
}

export default PaymentCard