import './App.css'
import UsernameBox from './components/usernameBox'
import SubmitButton from './components/submitButton'
import PasswordBox from './components/passwordBox'
import ClearButton from './components/clearButton'
import { useRef } from 'react'

function App() {

  return (
    <div className='h-{100dvh} w-{100dvh}'>
      <div className='grid gap-8 border-black border-2 p-20 rounded-4xl'>

        {/* User input */}
        <div className='grid gap-4'>
          <UsernameBox label="Username" />
          <PasswordBox label="Password" />
        </div>

        {/* Submit Button */}
        <div className='flex-1'>
          <ClearButton />
          <SubmitButton />    
        </div>
      </div>
    </div>
  )
}

export default App
