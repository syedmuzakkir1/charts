import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
  
  export const data = [
    // {
    //   name: "Page A",
    //   uv: 4000,
    //   pv: 2400,
    //   amt: 2400
    // },
    // {
    //   name: "Page B",
    //   uv: 3000,
    //   pv: 1398,
    //   amt: 2210
    // },
    // {
    //   name: "Page C",
    //   uv: 2000,
    //   pv: 9800,
    //   amt: 2290
    // },
    // {
    //   name: "Page D",
    //   uv: 2780,
    //   pv: 3908,
    //   amt: 2000
    // },
    // {
    //   name: "Page E",
    //   uv: 1890,
    //   pv: 4800,
    //   amt: 2181
    // },
    // {
    //   name: "Page F",
    //   uv: 2390,
    //   pv: 3800,
    //   amt: 2500
    // },
    // {
    //   name: "Page G",
    //   uv: 3490,
    //   pv: 4300,
    //   amt: 2100
    // },
// ,
// { name: 'January', value1: 50, value2: 30 },
// { name: 'February', value1: 70, value2: 45 },
// { name: 'March', value1: 30, value2: 60 },

    { name: 'Product A', value: 50 },
    { name: 'Product B', value: 70 },
    { name: 'Product C', value: 30 },
  ];

const Lines = () => {
  return (
  <>
     <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  
  </>
  )
}

export default Lines