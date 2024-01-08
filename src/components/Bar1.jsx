import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {data} from '../components/Lines'

const Bar1 = () => {
  return (
    <div>Bar1

<BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Bar dataKey="value" fill="#8884d8" />
      <Tooltip />
      <Legend />
    </BarChart>
    </div>
  )
}

export default Bar1