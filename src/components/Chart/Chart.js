import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    console.log('dataPointValue=', props.dataPoints);
    const dataPointValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    // console.log('this is chart.js')

    const totalMaximum = Math.max(...dataPointValue);
    console.log('totalMaximum =', totalMaximum);
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) =>
            (<ChartBar
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                key={dataPoint.label}
            />))}
       
        </div>
    );
};
export default Chart;