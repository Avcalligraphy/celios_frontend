
"use client";

import React from 'react'
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale,
    Filler
} from 'chart.js'
import { Radar as RadarChart } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler);
interface RadarProps{
    data: any,
    options: any
}
export default function Radar(props: RadarProps) {
    const { data, options } = props
    
  return (
    <div className=' w-[500px] p-[20px] '>
        <RadarChart
            data={data}
            options={options}
        ></RadarChart>
    </div>
  )
}
