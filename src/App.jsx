import './App.css'
import Textbox from './components/inputbox'
import SubmitButton from './components/submitButton'

function App() {

  return (
    <div className='h-{100dvh} w-{100dvh}'>
      <div className='grid gap-8 bg-gray-100 p-20 rounded-4xl'>

        {/* User input */}
        <div className='grid gap-4'>
          <Textbox label="Username" />
          <Textbox label="Password" />
        </div>

        {/* Submit Button */}
        <SubmitButton />    
      </div>
    </div>
  )
}

export default App
