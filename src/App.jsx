import './App.css'
import Lines from './components/Lines'
import Areas from './components/Areas'
import Bars from './components/Bars'

function App() {

  return (
    <>
    <div className='main'>
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
      </div>
    </>
  )
}

export default App
