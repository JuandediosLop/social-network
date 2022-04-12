import React from "react";
import FormRegistrarse from "./FormRegistrarse";
import FormIniciarSesion from "./FormIniciarSesion";
import Div from "../atoms/Div";

const DivFormsContainer = () => {
    
    
    return (
        <Div className={"forms-container"}>
            <Div className={"signin-signup"}>
                <FormRegistrarse />
                <FormIniciarSesion />
            </Div>
        </Div>
    );
}
export default DivFormsContainer;