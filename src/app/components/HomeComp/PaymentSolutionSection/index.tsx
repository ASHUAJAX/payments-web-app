import PaymentCard from "./PaymentCard";
import "./PaymentSolutionSection.scss";
import { data } from './data';

function PaymentSolutionSection() {
    return (
        <div className='PaymentSolutionSection'>
     
            <h1 className='PaymentSolutionSection_heading'>
                Flexible Payment Solutions
            </h1>
            <p className='PaymentSolutionSection_para'>Vearn Tech offers seamless online payment services for <br/>mobile recharges and bill payments.</p>
        
        <div>
            {
                data.map((elm,ix)=>(
                    <PaymentCard key={ix}  heading={elm.heading} para={elm.para} type={elm.type} imgSrc={elm.imgSrc} />
                ))
            }
        </div>
        
        </div>
    )
}

export default PaymentSolutionSection;