"use client";
import React, { useEffect, useState } from "react";
import "./Footer.scss";
import CustomInput from "../CustomInput";
import ButtonComp from "../ButtonComp";
import { CircularProgress } from "@mui/material";
import AOS from 'aos';

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

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: false,    // Animation triggers on every scroll
      offset: -100,    // Trigger animations 100px before the element reaches the viewport
    });

    AOS.refresh(); // Refresh animations when dynamically loaded
  }, []);

  return (
    <div className="Footer">
      <div className="Footer_wrapper">
        <div className="Footer_wrapper_contact">
          <h1 className="Footer_wrapper_contact_head">contact</h1>
          <p className="Footer_wrapper_contact_email" data-aos="fade-right" data-aos-delay="100">info@example.online</p>
          <p className="Footer_wrapper_contact_address" data-aos="fade-right" data-aos-delay="200">
            10th Floor Tower B Windsor IT Park Sector 125,
            <br /> Noida, Uttar Pradesh 201313
          </p>
        </div>
        <div className="Footer_wrapper_quickLinks">
          <h1 className="Footer_wrapper_quickLinks_head">quick links</h1>
          <ul className="Footer_wrapper_quickLinks_list">
            <li data-aos="fade-right" data-aos-delay="100" ><a href="/privacy-policy">privacy policy</a></li>
            <li data-aos="fade-right" data-aos-delay="200"><a href="/terms-&-condition">terms & condition</a></li>
            <li data-aos="fade-right" data-aos-delay="300"><a href="/refund-policy">refund policy</a></li>
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
            <form onSubmit={onSendMessage} data-aos="fade-right" data-aos-delay="100" >
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
