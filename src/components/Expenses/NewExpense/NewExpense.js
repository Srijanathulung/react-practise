import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isEditing, setIsEditing]=useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData)
        props.addExpenseData(expenseData);
        
    }
    const startEditingHandler = () => {
        setIsEditing (true);
    }
    const stopEditingHandler = () => {
        setIsEditing( false);
    }
     
   

    return (
        <div className='new-expense'>
            {!isEditing && (
                <button onClick={startEditingHandler}>Add new expenses</button>
            )}
            {isEditing && (
                 <ExpenseForm
                 saveExpenseData={saveExpenseDataHandler}
                 cancelHandler={stopEditingHandler}
             />
            )

            }
            
        </div>
    )
}
export default NewExpense;