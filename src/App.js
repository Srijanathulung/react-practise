import './App.css';
import ExpenseItem from './components/ExpenseItem';

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
      <ExpenseItem
        titleAttribute={expense[0].title}
        amountAttribute={expense[0].amount}
        dateAttribute={expense[0].date}>
      </ExpenseItem>
      <ExpenseItem
      titleAttribute={expense[1].title}
      amountAttribute={expense[1].amount}
        dateAttribute={expense[1].date}
      />
      <ExpenseItem
      titleAttribute={expense[2].title}
      amountAttribute={expense[2].amount}
        dateAttribute={expense[2].date}
      />
      <ExpenseItem
      titleAttribute={expense[3].title}
      amountAttribute={expense[3].amount}
        dateAttribute={expense[3].date}
      />

    </div>
  );
}

export default App;
