// import React from 'react'
// import NavBar from './component/navBar/NavBar'
// import Body from './component/section/Body'
// import Footer from './component/footer/Footer'
// import DEmo from './component/DEmo'
// import PropsChild1 from './component/props/PropsChild1'
// import Card from './component/props/props2/Card'
// // import "./App.css"

// const App = () => {
//   return (
//     <div>
//       {/* <NavBar></NavBar>
//       <Body></Body>
//       <Footer></Footer> */}
//       {/* <DEmo></DEmo> */}
//       {/* <PropsChild1 userName="Mukund" city="Begusarai"></PropsChild1> */}
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import Card from './component/props/props2/Card'
import "./App.css"
import Roman  from "./"

const App =() => {
  const user1={

    userName:"Roman Reigns",
    about:"Leati Joseph Anoaʻi is an American professional wrestler and former football player. As a wrestler, he has been signed to WWE since 2010."
  }

  const user2={
    userName:'Gold Burg',
    about:'Leati Joseph Anoaʻi is an American professional wrestler and former football player. As a wrestler, he has been signed to WWE since 2010.'
  }
  
  return (
    <div className='flex flex-wrap gap-10 justify-center items-center'>
        <Card user={user1}></Card>
        <Card user={user2}></Card>
    </div>
  )
}

export default App