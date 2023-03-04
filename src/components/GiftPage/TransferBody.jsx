import React from 'react';
import SendGift from './SendGift';

const TransferBody = () => {
    return (
        <>
            <p><b>CBU:</b> 0000003100003718707102</p>
            <p><b>Alias:</b> sergio.agustin.m</p>
            <p><b>CUIT/CUIL:</b> 20384596232 </p>
            <SendGift type={'transferencia'}/>
        </>
    );
}

export default TransferBody;
