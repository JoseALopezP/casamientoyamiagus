import React from 'react';
import { Button } from 'react-bootstrap';

const Links = () => {
    return (
        <div className='linksBlock'>
            <Button variant="outline-warning giftsBtn" onClick={() => {navigator.clipboard.writeText('https://casamientoyamiagus.vercel.app/') ; alert('Link copiado a portapapeles')}}>
                    A CENA
            </Button>
            <Button variant="outline-warning giftsBtn" onClick={() => {navigator.clipboard.writeText('https://casamientoyamiagus.vercel.app/dcena') ; alert('Link copiado a portapapeles')}}>
                    DESPUÉS DE CENA
            </Button>
        </div>
    );
}

export default Links;
