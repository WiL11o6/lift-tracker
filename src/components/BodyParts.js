import { useState } from 'react';
import { Back } from './Back';
import { Legs } from './Legs';
import { Chest } from './Chest';

export const BodyParts = () => {
    
    const [showChest, setShowChest] = useState(false);
    const [showLegs, setShowLegs] = useState(false);
    const [showBack, setShowBack] = useState(false);

    return (
        <>
            
            {/* If showChest is true, display Chest component, etc. */}
            {showChest ? (<Chest/>) 
                : showLegs ? (<Legs/>)
                : showBack ? (<Back/>)
                : (
                <>   
                    <h1 class="display-6">What part of the body are you working out today?</h1>
                    <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowChest(true)}}>Chest</button></div>
                    
                    <div className="flex-item"><button class="btn btn-primary"onClick={() => {setShowLegs(true)}}>Legs</button></div>
                    
                    <div className="flex-item"><button class="btn btn-primary"onClick={() => {setShowBack(true)}}>Back</button></div>
                </>
            )}
        
        
        </>
    )
}