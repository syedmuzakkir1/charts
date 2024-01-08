import './App.css'
import Lines from './components/Lines'
import Areas from './components/Areas'
import Bars from './components/Bars'
import Line1 from './components/Line1'
import Bar1 from './components/Bar1'
import Area1 from './components/Area1'
import StockLine from './components/StockLine'

function App() {

  return (
    <>
    <div className='flex flex-col items-center text-center'>
   
   <h1 className='text-2xl font-bold text-blue-500'>Line Charts  , Bar charts , Area chart using Rechart Library</h1>
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
       

       <StockLine/>
      
      </div>
   
    </>
  )
}

export default App
