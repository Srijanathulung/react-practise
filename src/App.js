import './App.css';
import Expenses from './components/Expenses';

function App() {
  const expense = [{
    id: 'a1',
    title: 'toilet paper',
    amount: 'Rs 20',
    date: new Date(2020,10,12),
  },
    {
      id: 'a2',
      title: 'towel',
      amount: 'Rs 200',
      date: new Date(2021,2,12),
    },
    {
      id: 'a3',
      title: 'onion',
      amount: 'Rs 20',
      date: new Date(2021,5,12),
    },
    {
      id: 'a4',
      title: 'apple',
      amount: 'Rs 250',
      date: new Date(2021,2,12),
    }
  ]
  return (
    <div className="App">
      <h1>Lets start the react</h1>
      <Expenses items={expense}/>
    </div>
  );
}

export default App;
