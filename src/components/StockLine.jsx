import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const stockData = [
    { date: '2012-01-01', bitcoin: 50, yahooFinance: 70, googleFinance: 30, iexCloud: 40 },
    // Add more data points for each date
  ];
const StockLine = () => {
  return (
    <div>StockLine

<LineChart width={800} height={400} data={stockData}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />

      <Line type="monotone" dataKey="bitcoin" stroke="#8884d8" name="Bitcoin" />
      <Line type="monotone" dataKey="yahooFinance" stroke="#82ca9d" name="Yahoo Finance" />
      <Line type="monotone" dataKey="googleFinance" stroke="#ffc658" name="Google Finance" />
      <Line type="monotone" dataKey="iexCloud" stroke="#ff7300" name="IEX Cloud" />
    </LineChart>

    </div>
  )
}

export default StockLine