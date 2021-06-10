import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
    const chartDataPoints = [
        { label: 'jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'March', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'june', value: 0 },
        { label: 'july', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 }
      
    ];
    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();//return month starting at 0 jan=0
        chartDataPoints[expenseMonth].value+=expense.amount 
        
    }
    return <Chart dataPoints={chartDataPoints}/>
 }

export default ExpenseChart;