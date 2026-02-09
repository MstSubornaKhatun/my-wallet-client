
import './App.css'
import Banner from './components/ui/Banner'
import { Button } from './components/ui/button'

function App() {

  return (
    <>
 
      <h1 className='mb-5'>Shadcn Button</h1>
      <div className='mb-5'>
        <Button>Primary</Button>
      </div>
      <div className='mb-5'>
        <Button variant={'secondary'}>Secondary</Button>
      </div>
      <Banner></Banner>
     
    </>
  )
}

export default App
