import { Nav } from './components/Nav'
import * as G from './GlobalStyles'
import { Article } from './components/Article'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const BMIShow = (value: number) => {
    if(isNaN(value) == true) alert('You should put a number')

    else alert(value)
  }

  return (
    <div>
      <G.main>
        <Nav></Nav>


        <G.FlexDiv>
          <Article  Fction={BMIShow} ></Article>

          <div>text</div>
        </G.FlexDiv>

      </G.main>
      
    </div>
  )
}

export default App
