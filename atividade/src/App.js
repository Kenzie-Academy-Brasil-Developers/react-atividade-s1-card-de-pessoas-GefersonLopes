import './App.css';
import { Developer } from './components/Developer';

function App() {
  const array = [
    {
      name:"Geferson",
      age:20,
      country:"Brasil"
    },
    {
      name:"Thais",
      age:24,
      country:"Brasil"
    },
    {
      name:"Maurina",
      age:45,
      country:"Brasil"
    },
  ]
  return (
    <div className="App">
      <header className="App-header">
        {
          array.map(elem => <Developer name={elem.name} age={elem.age} country={elem.country} />)
        }
      </header>
    </div>
  );
}

export default App;
