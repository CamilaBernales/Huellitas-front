import React from 'react'
import imagen from "../../../img/logoprueba.png";

export default function ImagenHome() {


    return (
        <div>
            <div className="d-flex img-fluid mt-0 justify-content-center align-items-center">
                <img alt="logo" src={imagen} />
             </div>
        </div>
    )
}
