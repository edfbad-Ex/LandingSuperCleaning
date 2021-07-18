import React from 'react'
import Map from './Map';
import "../Css/Contact.css";

function Contact() {
    return (
        <div className="Container-Contact">
            
            <div className="Container-Contact-Child">

                <form className="Container-Contact-Child-Form">

                    <div className="Container-Contact-Child-Form-Child">
                        
                        <span>Nombre:</span>
                        <input type="text"/>

                    </div>
                    
                    <div className="Container-Contact-Child-Form-Child">

                        <span>Correo:</span>
                        <input type="text"/>

                    </div>

                    <div className="Container-Contact-Child-Form-Child">

                        <span>Teléfono:</span>
                        <input type="text"/>

                    </div>
                    
                    <div className="Container-Contact-Child-Form-Child">

                        <span>Mensaje:</span>
                        <textarea></textarea>

                    </div>

                    <div className="Container-Contact-Child-Form-Child">

                        <button>Super Cleaning</button>

                    </div>

                </form>

            </div>

            <div className="Container-Contact-Child">

                <Map />
            
            </div>
            
            
        </div>
    )
}

export default Contact
