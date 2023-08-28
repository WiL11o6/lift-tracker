import { useEffect } from 'react';
import { useState } from 'react';

export const PushUpsLiftInputs = () => {
    const [enterWeight, setEnterWeight] = useState("");
    const [weight, setWeight] = useState(() => {
        const localValue = localStorage.getItem("weights");
        if (localValue == null) return []
        return JSON.parse(localValue)
    });

    const [enterReps, setEnterReps] = useState("");
    const [reps, setReps] = useState(() => {
        const localValue = localStorage.getItem("reps");
        if (localValue == null) return []
        return JSON.parse(localValue)
    });

    useEffect(() => {
        const handleBeforeUnload = (event) => {
          event.preventDefault();
          event.returnValue = ''; // Display an empty message in the alert box
        };
    
        window.addEventListener('beforeunload', handleBeforeUnload);
    
        return () => {
          window.removeEventListener('beforeunload', handleBeforeUnload);
        };
      }, []);

    
    useEffect(() => {
        localStorage.setItem("weights", JSON.stringify(weight))
    }, [weight]);

    useEffect(() => {
        localStorage.setItem("reps", JSON.stringify(reps))
    }, [reps]);

    function submitForm(e) {
        e.preventDefault()

    
        setWeight(currentWeight => {
            return [
                ...currentWeight,
                { id: crypto.randomUUID(), title: enterWeight, completed: false },
            ]
        })
        setEnterWeight("");
    }

    function deleteWeight(id) {
        setWeight(currentWeight => {
            return currentWeight.filter(weight => weight.id !== id)
        })
        setReps(currentReps => {
            return currentReps.filter(reps => reps.id !== id)
        })
    }

    function submitFormReps(e) {
        e.preventDefault();

        setReps(currentReps => {
            return [
                ...currentReps,
                { id: crypto.randomUUID(), title: enterReps, completed: false },
            ]
        })
        setEnterReps("");
    }

    
    
    return (
        <>
        <div className="form-wrapper">
        <div className="form">
        <form onSubmit={submitForm}>
            <div class="input-group mb-3">
                <label htmlFor="weight"></label>
                <input class="form-control" placeholder="Enter Weight" value={enterWeight} onChange={e => setEnterWeight(e.target.value)} type="text" id="weight"/>
                <button class="btn btn-primary custom-button">Add</button>
            </div>
            
        </form>
        <h1 class="display-6">Weight</h1>
        <ul class="ul-element">
            {weight.map(e => {
                return (
                <li key={e.id}>
                    <label class="label-font">
                        {e.title}
                    </label>
                    <button class="btn btn-danger" onClick={() => deleteWeight(e.id)}>Remove</button>
                </li>
                )
            })}
        </ul>
        </div>

        <div className="form">
        <form onSubmit={submitFormReps}>
            <div class="input-group mb-3">
                <label htmlFor="reps"></label>
                <input class="form-control" placeholder="Enter Reps" value={enterReps} onChange={e => setEnterReps(e.target.value)} type="text" id="reps"/>
                <button class="btn btn-primary custom-button">Add</button>
            </div>
        </form>
        <h1 class="display-6">Reps</h1>
        <ul class="ul-element">
            {reps.map(e => {
                return (
                <li key={e.id}>
                    <label class="label-font">
                        {e.title}
                    </label>
                    <button class="btn btn-danger" onClick={() => deleteWeight(e.id)}>Remove</button>
                </li>
                )
            })}
        </ul>
        </div>
        </div>
        </>
    )
}