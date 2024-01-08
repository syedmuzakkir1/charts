import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {data} from '../components/Lines'
const Area1 = () => {
  return (
    <div>Area1

<AreaChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Area type="monotone" dataKey="value" fill="#8884d8" />
      <Tooltip />
      <Legend />
    </AreaChart>

    </div>
  )
}

export default Area1