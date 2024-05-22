import React, { useState } from 'react';
import '../style.css'; // Import the CSS file

const LavaLampBackground: React.FC = () => {
    const [ ] = useState(false);

    

    return (
        <div className="lamp">
            <div className="lava">
            <div className='blob'></div>
            <div className='blob'></div>
            <div className='blob'></div>
            <div className='blob'></div>
            <div className='blob'></div>
            <div className='blob'></div>
            <div className='blob'></div>
            </div>
        </div>
    );
};

export default LavaLampBackground;
