"use client"
import React, { useState } from 'react'
import ButtonComp from '../../../ButtonComp';
import CustomInput from '../../../CustomInput';
import  "./GetInTouch.scss";
interface dataInterface {
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  label?: string;
  required: boolean;
  type: string;
}

function GetInTouch() {
    
    const [data, setData] = useState<dataInterface[]>([{
        name: "firstName",
        placeholder: "Enter Your First Name",
        value: "",
        error:"",
        label :"your first name",
        required:true,
        type:"text"
      },{
        name: "email",
        placeholder: "Enter Your email for updates",
        value: "",
        error:"",
        label :"Your email address",
        required:true,
        type:"email"
      },{
        name: "message",
        placeholder: "Enter your message or query",
        value: "",
        error:"",
        label :"your message here",
        required:true,
        type:"textarea"
      }]);
    
      const onSubmitFunc=(ev: React.FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
      }

    return (
        <div className='GetInTouch'>
            <div className='GetInTouch_content'>
                <h1>Get in Touch</h1>
                <p>Contact us for seamless online payment solutions, mobile recharge, and bill payments for Indian customers.</p>
            </div>
            <div className='GetInTouch_formWrapper'>
                <form className='GetInTouch_formWrapper_form' onSubmit={onSubmitFunc}>

                <CustomInput setData={setData} data={data}  />
                    <br />
                    <ButtonComp varient="fill" text='send message' type='submit' />
                </form>
            </div>
        </div>
    )
}

export default GetInTouch;