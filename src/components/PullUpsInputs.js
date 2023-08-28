import { useEffect } from 'react';
import { useState } from 'react';

const PullUpsInputs = () => {
    const [enterWeight, setEnterWeight] = useState("");
    const [weight, setWeight] = useState(() => {
        const localValue = localStorage.getItem("PullUpsWeight");
        if (localValue == null) return []
        return JSON.parse(localValue)
    });

    const [enterReps, setEnterReps] = useState("");
    const [PullUpsReps, setPullUpsReps] = useState(() => {
        const localValue = localStorage.getItem("PullUpsReps");
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
        localStorage.setItem("PullUpsWeight", JSON.stringify(weight))
    }, [weight]);

    useEffect(() => {
        localStorage.setItem("PullUpsReps", JSON.stringify(PullUpsReps))
    }, [PullUpsReps]);

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
        setPullUpsReps(currentReps => {
            return currentReps.filter(PullUpsReps => PullUpsReps.id !== id)
        })
    }

    function submitFormReps(e) {
        e.preventDefault();

        setPullUpsReps(currentReps => {
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
                <label htmlFor="PullUpsReps"></label>
                <input class="form-control" placeholder="Enter Reps" value={enterReps} onChange={e => setEnterReps(e.target.value)} type="text" id="PullUpsReps"/>
                <button class="btn btn-primary custom-button">Add</button>
            </div>
        </form>
        <h1 class="display-6">Reps</h1>
        <ul class="ul-element">
            {PullUpsReps.map(e => {
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

export default PullUpsInputs;