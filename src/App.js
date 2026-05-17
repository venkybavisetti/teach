import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(parseInt(event.target.value));
  };

  return (
    <div className="App">
      <input type="number" onChange={handleInputChange} value={inputText} />
      <Counter parent={inputText} />
    </div>
  );
}

export default App;
