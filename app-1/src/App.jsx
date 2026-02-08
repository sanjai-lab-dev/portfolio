import React from 'react'
import Skills from './Skills'
import Home from './Home'
import Contect from './Contect'
import Project from './Project'
import Theme from './Theme'
function App() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-stone-800'>
      <div className="m-0 snap-center p-0"><Home></Home></div>
      <div className="snap-center"><Skills></Skills></div>
      <div className="snap-center"><Project></Project></div>
      <div className="snap-center"><Contect /></div>
      {/* <Theme></Theme> */}
    </div>

  )
}

export default App