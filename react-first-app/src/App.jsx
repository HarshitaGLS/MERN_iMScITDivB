// import './App.css'
import EventDemo from './aug21/EventDemo'
import Home from './aug21/Home'
import Counter from './aug25/Counter'
import Formhandling from './aug26/formhandling'
import Statedemo from './aug26/Statedemo'
import Products from './Sep18/Products'
import PropsRemaining from './Sep18/PropsRemaining'
import ClassDemo from './sep20/ClassDemo'
import Register from './sep20/Register'

function App() {

  return (
    <>
     <h1 style={{color:"red",backgroundColor:"lightblue"}}>hello React</h1>   
      {/* <h2 id="" name="">Have a nice Day!!</h2> */}
      {/* <EventDemo/>
      <Home/> */}
      {/* <Counter username="GLS" 
      isLoggedIn={true} 
      mobile={9987797}
      isActive={null}
      ></Counter> */}
      {/* <Statedemo username="Harshita"/> */}

        {/* <Formhandling/> */}
        {/* <PropsRemaining fname="Ram" lname="Sharma">
          <b>bold text</b>
        </PropsRemaining> */}
        <hr/>
        {/* <PropsRemaining fname="Siya">
          <h1>heading tag</h1>
          <EventDemo/>
        </PropsRemaining> */}
        {/* <Products/> */}
        {/* <Register title="Register Here"/> */}

        <ClassDemo username="GLS" 
         isLoggedIn={true} 
        mobile={9987797}
        isActive={null}></ClassDemo>
    </>
  )
}

export default App

