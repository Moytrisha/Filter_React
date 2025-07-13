import { useState } from 'react'

import './App.css'
import Form from './Component/Form/Form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Form />
      </div>
    
    </>
  )
}

export default App
