import React from 'react'
import NavBar from './component/navBar/NavBar'
import Body from './component/section/Body'
import Footer from './component/footer/Footer'
import DEmo from './component/DEmo'
import PropsChild1 from './component/props/PropsChild1'

const App = () => {
  return (
    <div className=' bg-cyan-800'>
      {/* <NavBar></NavBar>
      <Body></Body>
      <Footer></Footer> */}
      {/* <DEmo></DEmo> */}
      <PropsChild1 userName="Mukund" city="Begusarai"></PropsChild1>
    </div>
  )
}

export default App