import { Nav } from './components/Nav'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <main>
        <Nav></Nav>

      </main>
      
    </div>
  )
}

export default App
