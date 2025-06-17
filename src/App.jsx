import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Index from './components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Index/>
    </main>
  )
}

export default App
