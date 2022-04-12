import React from "react";
import Div from "../atoms/Div";


const DivContent = ({className, text, describe, children}) => {
  return (
    <Div className={className}>
        <h3>{text}</h3>
        <p>{describe}</p>
        {children}
    </Div>
  );
}
export default DivContent;