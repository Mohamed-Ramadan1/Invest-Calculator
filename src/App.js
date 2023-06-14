import React,{useState} from 'react';
import Form from './Components/Form';
import Header from './Components/Header';
import Result from './Components/Result';


function App() {
  const [results, setResults] = useState(null);

    const calculateHandler = (userInput) => {

        const yearlyData = []; 
        let currentSavings = +userInput['current-savings']; 
        const yearlyContribution = +userInput['yearly-contribution']; 
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        
        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
          }
          setResults(yearlyData)

    };
  

return (
    <div>
      <Header />
    <Form onCalculate={calculateHandler} />
    <Result data={results} />

    
    </div>
  );
}

export default App;
