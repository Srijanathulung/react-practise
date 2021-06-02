import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

    console.log('Expense form is working')
    return (
        <form>
        <div className='new-expense_controls'>
            <div className='new-expense_control'>
                 <label>Title</label>
                 <input type ='text' />
            </div>

            <div className='new-expense_control'>
               <label>Amount</label>
               <input type='number' min ='0.01' max='1000'/>
            </div>

            <div className='new-expense_control'> 
               <label>Date</label>
               <input type='Date' min ='1/1/2019' max='12/30/2022'/>
             </div>
                
             <div className='new-expense_actions'>
                <button type='submit'>Add Expense</button>
             </div>

       
        </div>
        </form>
    )
}
export default ExpenseForm;