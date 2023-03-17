import './index.css'
import React from 'react';

const Footer = () => {
    return (
        <div className='footerBlock'>
            <div className="footerMsg">

                <h5 className='greenPart'> Por favor, recordá confirmar tu asistencia antes del 24 de Marzo</h5>
                <p className='greenPart'>¡Te esperamos para compartir este momento tan importante de nuestras vidas! </p>
                <p className='goldenPart'>Yami & Agus</p>
            </div>
            <div className="contactInfo">
                <p className='contactMsg'>Por cualquier duda o modificación, podés contactarte con cualquiera de nosotros a nuestros números de celular:</p>
                <p className='contactGabi'>264-6702241 (Yami)</p>
                <p className='contactLucas'>264-4836195 (Agus)</p>
            </div>
        </div>
    );
}

export default Footer;
