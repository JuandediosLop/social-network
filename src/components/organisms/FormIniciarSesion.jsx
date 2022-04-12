import React from "react";
import Form from "../atoms/Form";
import DivInputI from "../molecules/DivInputI";
import Img from "../atoms/Img";


const FormIniciarSesion = () => {
    return (
        <Form className={"sign-in-form"}>

            <Img src={"/img/logo.png"} alt={"Logo"} className={"logo"} />
            <br />

            <h2 className="title">Iniciar Sesión</h2>

            <DivInputI iClassName={"fas fa-user"} className={"input-field"} type={"text"} placeholder={"Correo UVG"} />

            <DivInputI iClassName={"fas fa-lock"} className={"input-field"} type={"password"} placeholder={"Contraseña"} />

            <button className={"btn solid"}>Iniciar Sesión</button>
        </Form>
    );
}

export default FormIniciarSesion;