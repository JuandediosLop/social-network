import React from "react";
import Div from "../atoms/Div";
import I from "../atoms/I";
import Input from "../atoms/Input";

const DivInputI = ({ iClassName, className, type, placeholder }) => {
    return (
        <Div className={className}>
        <I className={iClassName} />
        <Input type={type} placeholder={placeholder} className="" />
        </Div>
    );
}

export default DivInputI;