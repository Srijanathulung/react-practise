import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
//   to save the value useState is used.
         const [enteredTitle, setEnteredTitle] = useState('');
         const [enteredAmount, setEnteredAmount] = useState('');
         const [enteredDate, setEnteredDate] = useState('');
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
    // });
    
    // const titleChangeHandler = (event) => {
    //     console.log(event.target.value);
    // }

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // console.log('this is clicked and working')
        // setUserInput({
        //     //in line 24 spread operator is used to prevent loss of value.It means old other value is also part of new state.
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // });
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value) 
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
     };
    // console.log('Expense form is working')
    
    return (
        <form onSubmit={submitHandler}>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                 <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
            </div>

            <div className='new-expense_control'>
               <label>Amount</label>
                    <input
                        type='number'
                        min='0.01' max='1000'
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
            </div>

            <div className='new-expense_control'> 
               <label>Date</label>
                    <input
                        type='Date'
                        min='1/1/2019'
                        max='12/30/2022'
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
             </div>
                
             <div className='new-expense_actions'>
                <button type='submit' onClick={submitHandler}>Add Expense</button>
                </div>
                
        </div>
        </form>
    )
}
export default ExpenseForm;