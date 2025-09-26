import Navbar from "./pages/Navbar";
import { Home } from "./pages/Home";
import { Outlet } from "react-router";
import { Counter } from "./components/Counter";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Counter/>
        <Outlet />
      </div>
    </>
  )
}

export default App;
