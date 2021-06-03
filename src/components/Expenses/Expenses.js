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
      <ExpenseItem
        titleAttribute={props.items[0].title}
        amountAttribute={props.items[0].amount}
        dateAttribute={props.items[0].date}/>
     
      <ExpenseItem
      titleAttribute={props.items[1].title}
      amountAttribute={props.items[1].amount}
        dateAttribute={props.items[1].date}
      />
      <ExpenseItem
      titleAttribute={props.items[2].title}
      amountAttribute={props.items[2].amount}
        dateAttribute={props.items[2].date}
      />
      <ExpenseItem
      titleAttribute={props.items[3].title}
      amountAttribute={props.items[3].amount}
        dateAttribute={props.items[3].date}
      />
{/* </div> */}
      </Card>

    )
}
export default Expenses;