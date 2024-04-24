// import React from 'react'

// const PropsChild1 = (props) => {
//     console.log(props.userName);
//   return (
//     <div>
//         <h1>{props.userName}</h1>
//         PropsChild1
//     </div>
//   )
// }

// export default PropsChild1



import React from 'react'

const PropsChild1 = (props) => {
    console.log(props.userName);
    console.log(props.city);
  return (
    <div>
        <h1>{props.userName}</h1>
        <h1>{props.city}</h1>
        PropsChild1
    </div>
  )
}

export default PropsChild1