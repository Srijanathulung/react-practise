import React, { useState } from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from '../Expenses/ExpenseFilter';
import ExpenseList from './ExpenseList';

const Expenses=(props)=> {
  // console.log('this is apple');
  const [filteredYear, setFilteredYear] = useState('2019');
  
  // const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

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
    <ExpenseList items={filteredExpenses }/>
{/* </div> */}
    </Card>

  )
  }

 

export default Expenses;