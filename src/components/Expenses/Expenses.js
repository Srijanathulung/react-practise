import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../Expenses/ExpenseFilter';

const Expenses=(props)=> {
    // console.log('this is apple');
  
  const [filteredYear, setFilteredYear] = useState('2019');
  // const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  

  return (
      //yeha className bhaney ko just a prop in this case coz yo custom component ho.
        <Card classNameX="expenses">
      {/* <div className="expenses"> */}
      {/* <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      /> */}
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          titleAttribute={expense.title}
          amountAttribute={expense.amount}
          dateAttribute={expense.date}
        />
      ))}
      
{/* </div> */}
      </Card>

    )
}
export default Expenses;