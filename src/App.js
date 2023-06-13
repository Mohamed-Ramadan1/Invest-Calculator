import Form from './Components/Form';
import Header from './Components/Header';
import Result from './Components/Result';


function App() {
return (
    <div>
      <Header />
      <Form />
      <Result/>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
    </div>
  );
}

export default App;
