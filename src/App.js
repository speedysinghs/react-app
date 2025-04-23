import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from  './Pages/Home';
// import About from './Pages/About';
import Navigation from "./components/Navigation";
import Products from "./Pages/Products";
import Cart from './Pages/Cart'

const App = () =>{
    return(
        <>
        <Router>
            <Navigation/>
            <Routes>
                <Route path="/" Component={Home}></Route>
                {/* <Route path="/about" Component={About}></Route> */}
                <Route path="/products" Component={Products}></Route>
                <Route path="/cart" Component={Cart}></Route>
            </Routes>
        </Router>
        </>
    )
}

export default App;