import { useState } from 'react';
import PullUpsInputs from './PullUpsInputs'
import BWRowsInputs from './BWRowsInputs'
import DBRowsInputs from './DBRowsInputs'

export const Back = () => {
    const [showPullUps, setShowPullUps] = useState(false);
    const [showBWRows, setShowBWRows] = useState(false);
    const [showDBRows, setShowDBRows] = useState(false);
    
    return (
        <>
            {showPullUps ? (<PullUpsInputs/>)
                : showBWRows ? (<BWRowsInputs/>)
                : showDBRows ? (<DBRowsInputs/>)
                : (
                <>
                <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowPullUps(true)}}>Pull Ups</button></div>
                <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowBWRows(true)}}>Bodyweight Rows</button></div>
                <div className="flex-item"><button class="btn btn-primary" onClick={() => {setShowDBRows(true)}}>Dumbbell Rows</button></div>
                </>
                )}

        </>
    )
}