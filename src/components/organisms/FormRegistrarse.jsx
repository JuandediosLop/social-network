import React from "react";
import Form from "../atoms/Form";
import Img from "../atoms/Img";
import DivInputI from "../molecules/DivInputI";
const FormRegistrarse = () => {
    return (
        <Form className={"sign-up-form"}>
            <Img src={"/img/logo.png"} alt={"Logo"} className={"logo"} />
            <br />
            <h2 className="title">Registrarse</h2>
            <DivInputI iClassName={"fas fa-user"} className={"input-field"} type={"text"} placeholder={"Nombre de Usuario"} />
            <DivInputI iClassName={"fas fa-envelope"} className={"input-field"} type={"email"} placeholder={"Correo electronico"} />
            <DivInputI iClassName={"fas fa-lock"} className={"input-field"} type={"password"} placeholder={"Contraseña"} />
            <button className={"btn solid"}>Registrarse</button>
    
        </Form>
    );
}   

export default FormRegistrarse;