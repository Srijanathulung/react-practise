import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';

const ExpenseList = (props) => {

    if (props.items.length === 0) {
        return <h2 className='expense-list_fallback'>Found no expense.</h2>
    }
    return <ul className='expense-list'>
        {
            props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    titleAttribute={expense.title}
                    amountAttribute={expense.amount}
                    dateAttribute={expense.date}
                />
            ))
        }

    </ul>
}
    export default ExpenseList;