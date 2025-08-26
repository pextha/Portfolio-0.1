import { useState } from 'react'

import NavBar from './Components/NavBar.jsx';
import Header from './Components/Header.jsx';
import Skills from './Components/skills.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavBar />
      <Header />
      <Skills />
    </div>  
    </>
  )
}

export default App
