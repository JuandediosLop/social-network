import React from "react";
import Div from "../atoms/Div";


const DivPanelsContainer = ( {children}) => {
    
    return( 
    <Div className="panels-container">
       {children}
    </Div>
    );
}

export default DivPanelsContainer;