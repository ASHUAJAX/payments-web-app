"use client";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import ButtonComp from "../ButtonComp";
import CustomInput from "../CustomInput";
import "./Footer.scss";

interface EmailInputData {
  name: string;
  placeholder: string;
  value: string;
  error?: string;
  label?: string;
  required: boolean;
  type: string;
}

function Footer() {
  const [emailInputData, setEmailInputData] = useState<EmailInputData[]>([
    {
      name: "email",
      placeholder: "Your email for updates",
      value: "",
      label: "Enter your email address",
      required: true,
      type: "email",
    },
  ]);

  const [isEmailSent, setIsEmailSent] = useState<"loading" | boolean>(false);

  const onSendMessage = (e: React.FormEvent<HTMLFormElement>): void => {
    setIsEmailSent("loading");
    e.preventDefault();
    setTimeout(() => {
      setIsEmailSent(true);
    }, 2000);
  };



  return (
    <div className="Footer" data-aos="zoom-in">
      <div className="Footer_wrapper">
        <div className="Footer_wrapper_contact">
          <h1 className="Footer_wrapper_contact_head">contact</h1>
          <p className="Footer_wrapper_contact_email" >info@example.online</p>
          <p className="Footer_wrapper_contact_address" >
            10th Floor Tower B Windsor IT Park Sector 125,
            <br /> Noida, Uttar Pradesh 201313
          </p>
        </div>
        <div className="Footer_wrapper_quickLinks">
          <h1 className="Footer_wrapper_quickLinks_head">quick links</h1>
          <ul className="Footer_wrapper_quickLinks_list">
            <li><Link href="/privacy-policy">privacy policy</Link></li>
            <li ><Link href="/terms-&-condition">terms & condition</Link></li>
            <li ><Link href="/refund-policy">refund policy</Link></li>
          </ul>
        </div>
        <div className="Footer_wrapper_sendMsg">
          <h1 className="Footer_wrapper_sendMsg_head">contact</h1>
          {isEmailSent ? (
            <p className="Footer_wrapper_sendMsg_afterSubmit">
              {isEmailSent === "loading" ? (
                <CircularProgress thickness={7} sx={{ color: "#b87dff" }} />
              ) : (
                "Email sent successfully!"
              )}
            </p>
          ) : (
            <form onSubmit={onSendMessage}  >
              <CustomInput setData={setEmailInputData} data={emailInputData} />
              <br />
              <ButtonComp varient="fill" text="send message" type="submit" />
            </form>
          )}
        </div>
      </div>

      <p className="Footer_bottom">
        © 2024. VEARN OUTFITS PRIVATE LIMITED. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
