import React, { useState } from 'react';
import '../style.css'; // Import the CSS file

const LavaLampBackground: React.FC = () => {
    const [isWobble, setIsWobble] = useState(false);

    const handleClick = () => {
        setIsWobble(true);

        // Reset wobble effect after 0.5s
        setTimeout(() => {
            setIsWobble(false);
        }, 500);
    };

    return (
        <div className="lamp">
            <div className="lava">
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
                <div className={`blob ${isWobble ? 'wobble' : ''}`} onClick={handleClick}></div>
            </div>
        </div>
    );
};

export default LavaLampBackground;
