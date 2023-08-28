import { useState } from 'react';
import BSSInputs from './BSSInputs';
import LungesInputs from './LungesInputs';

export const Legs = () => {

    const [showBSS, setShowBSS] = useState(false);
    const [showLunges, setShowLunges] = useState(false);

    return (
        <>
        {showBSS ? (<BSSInputs/>)
        : showLunges ? (<LungesInputs/>)
        :(
        <>
            <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowBSS(true)}}>Bulgarian Split Squat</button></div>
            <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowLunges(true)}}>Lunges</button></div>
        </>
        )}
        </>
    )
    
}