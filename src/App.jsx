import './App.css'
import Lines from './components/Lines'
import Areas from './components/Areas'
import Bars from './components/Bars'
import Line1 from './components/Line1'
import Bar1 from './components/Bar1'
import Area1 from './components/Area1'

function App() {

  return (
    <>
   Line Charts  , Bar charts , Area chart using Rechart Library
    {/* <div className='main'>
    <h2 className=''>Line chart</h2>
    <div className='flex items-center justify-center'>
        
     <Lines/>
  

     
     </div>
    <div className='flex items-center justify-center'>

    
     <Areas />
     </div>
     <div className='flex items-center justify-center flex-col'>
     <h2 >Bar chart</h2>
     <Bars/>
      </div>
      </div> */}

      <Line1></Line1>

      <Bar1></Bar1>

      <Area1></Area1>
   
    </>
  )
}

export default App
