import React, {useContext} from 'react';
import Confirmation from './Confirmation';
import { ListContext } from '../Context/ListContext';

const DateStaticBlock = () => {
    const {qDinner} = useContext(ListContext);
    return (
        <div className='dateStatickBlock'>
            <div className="date dateBlockItem">
                <img src="assets/calendarIcon.png" alt="Iglesia" />
                <p>Sábado 1 de Abril del 2023</p>
            </div>
            <div className="church dateBlockItem dateBlockItemHover"><a target="_blank" rel="noreferrer" href='https://goo.gl/maps/zhoSjb3mF3a3VHs77'>
                <img src="assets/churchIcon.png" alt="Iglesia" />
                <p>Iglesia Catedral (18:00)</p>
            </a></div>
            <div className="clock dateMsgBlockItem">
             <p>Luego de la Ceremonia, te esperamos para celebrar juntos en:</p>
            </div>
            <div className="party dateBlockItem dateBlockItemHover"><a target="_blank" rel="noreferrer" href='https://goo.gl/maps/1d5wntSo8CGgq1MB7'>
                <img src="assets/partyPopper.png" alt="Iglesia" />
                <p>Salón Los Morrillos</p>
            </a></div>
            <div className="clock dateBlockItem partyBlockItem">
                <img src="assets/clockIcon.png" alt="Iglesia" />
                {qDinner ? (<p>19:00</p>):(<p>00:30</p>)}
                <img src="assets/divider.png" alt="Iglesia" />
                <p>Elegante Formal</p>
            </div>
            <Confirmation qDinner={qDinner}/>
        </div>
    );
}

export default DateStaticBlock;
