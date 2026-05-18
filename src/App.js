import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Measurement from './components/Measurement';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <input type="number" onChange={handleInputChange} value={inputText} />
      <Counter parent={inputText} />
      <Measurement />
    </div>
  );
}

export default App;
