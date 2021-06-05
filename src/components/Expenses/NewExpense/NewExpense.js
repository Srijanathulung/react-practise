import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.addExpenseData(expenseData);
        
    }


    return <div className='new-expense'>
        <ExpenseForm saveExpenseData={saveExpenseDataHandler }/>
    </div>
}
export default NewExpense;