import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import React, { useState } from 'react';

const dummy_expense = [{
  id: 'a1',
  title: 'toilet paper',
  amount: '20',
  date: new Date(2020, 10, 12),
  currency: 'NRS '
},
  {
    id: 'a2',
    title: 'towel',
    amount: '200',
    date: new Date(2021, 2, 12),
    currency: 'NRS '
  },
  {
    id: 'a3',
    title: 'onion',
    amount: ' 20',
    date: new Date(2021, 5, 12),
    currency: 'NRS '
  },
  {
    id: 'a4',
    title: 'apple',
    amount: ' 250',
    date: new Date(2021, 2, 12),
    currency: 'NRS '
  }
]

const App = () => {
  
  const[expenses, setExpenses]=useState(dummy_expense)
  

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses)
      return [expense, ...prevExpenses];
    })
    // console.log('this is app.js');
    // console.log(expense);
  }

  return (
    <div className="App">
    
      <NewExpense addExpenseData={(expense) => {
        addExpenseDataHandler(expense)
      }}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
