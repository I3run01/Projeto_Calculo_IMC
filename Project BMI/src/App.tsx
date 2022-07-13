import * as G from './GlobalStyles'

import { Nav } from './components/Nav'
import { Article } from './components/Article'
import { BMIICon } from './components/BMIIcon'

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
          <G.Aside>
            <BMIICon
              image='./images/down.png'
              title='Over-weight'
              value = {10}
              subtittle = 'BMI is between 24.9 and 30'


            ></BMIICon>
          </G.Aside>
        </G.FlexDiv>

      </G.main>
      
    </div>
  )
}

export default App
