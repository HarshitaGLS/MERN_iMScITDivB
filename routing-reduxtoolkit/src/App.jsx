import Navbar from "./pages/Navbar"
import {Home} from './pages/Home'
import { Outlet } from "react-router"
function App() {
    return (
      <>
       <Navbar/>
       <div className="container">
         <Outlet/>
        </div>
      </>
  )
}

export default App
