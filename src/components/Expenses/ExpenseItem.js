import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

const ExpenseItem = (props) => {

    const [title,setTitle]= useState(props.titleAttribute)
    
    // let title = props.titleAttribute;

const clickHandler = () => {
    setTitle('updated');
    // console.log(title);
}
    
    //card bhaneyko custom wrapper component ho ,used as reusable wrapper.
    // return <Card classNameX='expense-item'>
    return (
        <Card classNameX='expense-item'>
{/* <div className='expense-item'> */}

        <ExpenseDate date={props.dateAttribute}/>
            <div className='expense-item_description'>
                {/* <h2>{props.titleAttribute}</h2> */}
                <h2>{title}</h2>
                <div className='expense-item_price'>
                    {props.currency}
                    {props.amountAttribute}
                </div>
                <button onClick={clickHandler}>Change Title</button>
            
                </div>
                {/* </div> */}
        </Card>
    )
  
}

export default ExpenseItem;