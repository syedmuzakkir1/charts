import React from 'react'
import {data} from '../components/Lines'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Line1 = () => {
  return (
    <div> <h2>Line1</h2>


<LineChart width={700} height={500} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <Tooltip />
      <Legend />
    </LineChart>


 
    </div>
  )
}

export default Line1