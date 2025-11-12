// import React from 'react'

// const PropsRemaining = (props) => {
//   return (
//     <>
//     {props.fname}
    // {props.children}
//     </>
//   )
// }

// export default PropsRemaining



import React from 'react'
import Image1 from '/src/assets/images/1.jpg'

const PropsRemaining = ({fname,lname="Shah",children}) => {
  return (
    <>
    {/* {fname} {lname}<br/> */}
    {/* {children[0]} */}
    {/* {children} */}
    <img src={Image1} />
    </>
  )
}

export default PropsRemaining