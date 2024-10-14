import React from 'react';
import "./ButtonComp.scss";

interface ButtonCompProps {
  classname?: string,
  text: string,
  type: "button" | "submit" | "reset";
  varient?:string
}
function ButtonComp({ classname, text, type,varient }: ButtonCompProps) {
  return (
    <button type={type} className={`${classname} ButtonComp ${varient === "fill" && "filled" }`}>
      {text}
    </button>
  )
}

export default ButtonComp