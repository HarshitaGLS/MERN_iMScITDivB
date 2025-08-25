// import './App.css'
import EventDemo from './aug21/EventDemo'
import Home from './aug21/Home'
import Counter from './aug25/Counter'

function App() {

  return (
    <>
     <h1 style={{color:"red",backgroundColor:"lightblue"}}>hello React</h1>   
      {/* <h2 id="" name="">Have a nice Day!!</h2> */}
      {/* <EventDemo/>
      <Home/> */}
      <Counter username="GLS" 
      isLoggedIn={true} 
      mobile={9987797}
      isActive={null}
      ></Counter>
    </>
  )
}

export default App
