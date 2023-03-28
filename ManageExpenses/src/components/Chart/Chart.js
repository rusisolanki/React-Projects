import React from 'react';
import ChartBar from './ChartBar'
import "./Chart.css"

export default function Chart(props) {

    const dataPointsValue = props.dataPoints.map((dataPoint) => (dataPoint.value))
    const totalMax = Math.max(...dataPointsValue)
    return(
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                key={dataPoint.value}
                value={dataPoint.value}
                maxValue={totalMax}
                label={dataPoint.label}/>
            ))}
        </div>
    )
}
