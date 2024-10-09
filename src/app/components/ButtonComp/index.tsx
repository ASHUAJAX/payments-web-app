import React from 'react';
import "./ButtonComp.scss";

interface ButtonCompProps{
    classname? : string,
    text:string,
    type : "button" | "submit" | "reset";
}
function ButtonComp({classname ,text,type}:ButtonCompProps) {
  return (
    <button type={type} className={`${classname} ButtonComp`}>
{text}
    </button>
  )
}

export default ButtonComp