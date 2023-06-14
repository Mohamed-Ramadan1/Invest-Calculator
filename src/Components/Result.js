import React from 'react';
import styles from './Result.module.css'

const formater = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits:2
})
const Result = (props) => {
console.log(props.results[0])
    return (
        <table className={styles.result}>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Savings</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
            </thead>
            <tbody>
                {
                    props.results.map(result => (
                        <tr key={result.year}>
                            <td>{ result.year}</td>
                            <td>{ formater.format(result.savingsEndOfYear)}</td>
                            <td>{ formater.format(result.yearlyInterest )}</td>
                            <td>{ formater.format(result.yearlyContribution)}</td>
                            <td>{ formater.format(result.yearlyContribution)}</td>
                        </tr>
                    ))
                }
            
            </tbody>
        </table>
    )
}

export default Result;