import React, {useState} from "react";
import Div from "../atoms/Div";
import DivPanelsContainer from "../organisms/DivPanelsContainer";
import DivFormsContainer from "../organisms/DivFormsContainer";
import DivContent from "../molecules/DivContent";
import Img from "../atoms/Img";

const DivContenedor = () => {

    const [activePanel, setActivePanel] = useState("");
    
    const handleClick = () => {
        setActivePanel("sign-up-mode");
    }
    
    const handleClick2 = () => {
        setActivePanel("");
    }

    return (
        <Div className={"container " + activePanel}>
            <DivFormsContainer />   
            <DivPanelsContainer >
                <Div className="panel left-panel">
                    <DivContent className="content" text={"¿Nuevo Aquí?"} describe={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!"} id={"sign-up-btn"} btnLegend={"Registrate"} >
                        <button onClick={handleClick} id="sign-up-btn" className="btn transparent">Registrate</button>
                </DivContent>
                <Img src={"/img/socialMedia_Isometric.svg"} alt={"Logo"} className={"image"} />
                </Div>

                <Div className="panel right-panel">
                    <DivContent className="content" text={" ¿Ya tienes Cuenta?"} describe={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, ex ratione. Aliquid!"} id={"sign-up-btn"} btnLegend={"Inicia Sesión"} >
                        <button onClick={handleClick2} id="sign-up-btn" className="btn transparent">Registrate</button>
                    </DivContent>
                    <Img src={"/img/FullInBox_Isometric.svg"} alt={"Logo"} className={"image"} />
        
                </Div>
            </DivPanelsContainer>
        </Div>
    );
}
export default DivContenedor;