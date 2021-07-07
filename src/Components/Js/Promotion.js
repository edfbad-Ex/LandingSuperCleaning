import React from 'react'
import Img from "../Img/limpiador.png"
import "../Css/Promotion.css"

function Promotion() {
    return (
        <div className="Container-Promotion">

            <div className="Container-Promotion-Child">

                <p className="Description-Promotion">En primer servicio</p>
                <p className="Description-Promotion">5% de Descuento</p>

            </div>

            <div className="Container-Promotion-Child">

                <img className="Image-Promotion" src={Img}/>

            </div>

            <div className="Container-Promotion-Child">

                <div className="Promotion-Circle" tabIndex="1">

                    <span className="Description-Promotion-Circle">CUPÓN</span>

                    <span className="Description-Promotion-Circle">DE DESCUENTO</span>

                </div>

            </div>                        
            
        </div>
    )
}

export default Promotion
