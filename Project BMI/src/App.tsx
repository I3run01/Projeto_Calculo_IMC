import { Nav } from './components/Nav'
import { Article } from './components/Article'
import * as G from './GlobalStyles'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const BMIShow = (value: number) => {
    
  }

  return (
    <div>
      <G.main>
        <Nav></Nav>

        <G.FlexDiv>
          <Article Fction={BMIShow}></Article>
          <div>text</div>
        </G.FlexDiv>

      </G.main>
      
    </div>
  )
}

export default App
