import { useState } from 'react';
import { PushUpsLiftInputs } from './PushUpsLiftInputs';
import DipsInputs from './DipsInputs';
import BenchInputs from './BenchInputs';


export const Chest = () => {
    
    const [showPushUps, setShowPushUps] = useState(false);
    const [showDips, setShowDips] = useState(false);
    const [showBench, setShowBench] = useState(false);

    return (
        <>
            {/* If showChest is true, display Chest component, etc. */}
            {showPushUps ? (<PushUpsLiftInputs/>) 
                : showDips ? (<DipsInputs/>)
                : showBench ? (<BenchInputs/>)
                : (
                <>   
                    <h1 class="display-6">What chest exercise are you going to do?</h1>
                    <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowPushUps(true)}}>PushUps</button></div>
                    <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowDips(true)}}>Dips</button></div>
                    <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowBench(true)}}>Bench</button></div>
                </>
            )}
        
        
        </>
    )
            
        
}