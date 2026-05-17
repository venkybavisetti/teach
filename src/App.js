import './App.css';
import Counter from './components/Counter';

function App() {
  
  return (
    <div className="App">
      <Counter parent={5}/>
      <Counter parent={6}/>
      <Counter parent={7}/>
    </div>
  );
}

export default App;
