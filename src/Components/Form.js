import React, { useState} from "react";
import styles from './Form.module.css';

const Form = () => {
    const [currentSavings, setCurrentSavings] = useState(null);

    const [yearlySaving, setYearlySaving] = useState(null);

    const [expectedInterst, setExpectedInterst] = useState(null);

    const [investDuration, setInvestDuration] = useState(null);


    const currentSavingsHandler = (event) => setCurrentSavings(event.target.value); 

    const yearlySavingHandler = (event) => setYearlySaving(event.target.value); 

    const expectedInterstHandler = (event) => setExpectedInterst(event.target.value); 

    const investDurationHandler = (event) => setInvestDuration(event.target.value); 
    

    const submitHandler = (event) => {
        event.preventDefault();
        let investData = {
            'current-savings':currentSavings,
            'yearly-contribution':yearlySaving,
            'expected-return':expectedInterst,
            'duration': investDuration,
        }

        resetValues()

    }


    const resetValues = () => {
        setCurrentSavings(null);
        setYearlySaving(null);
        setExpectedInterst(null);
        setInvestDuration(null);
    }

    

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            
            <div className={styles['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        value={currentSavings|| ""}
                        onChange={currentSavingsHandler}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        value={yearlySaving|| ""}
                        onChange={yearlySavingHandler}

                        
                    />
                </p>
            </div>

                <div className={styles['input-group']}>
                    <p>
                        <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                        </label>
                        <input
                            type="number"
                        id="expected-return"
                        value={expectedInterst|| ""}
                            onChange={expectedInterstHandler}
                        />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input
                            type="number"
                        id="duration"
                        value={investDuration|| ""}
                            onChange={investDurationHandler}
                        />
                    </p>
            </div>

            <p className={styles.actions}>
                <button
                    type="reset"
                    className={styles.buttonAlt}
                    
                >
                Reset
            </button>
                <button
                    type="submit"
                    className={styles.button}
                >
                Calculate
            </button>
            </p>
        </form>
    )
}

export default Form;