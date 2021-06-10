import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/Expenses/NewExpense/NewExpense';
import React, { useState } from 'react';

const dummy_expense = [{
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
    
      <NewExpense addExpenseData={()=>addExpenseDataHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
