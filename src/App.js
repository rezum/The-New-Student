
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes as Switch, Route,NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  
    <Router>
     <Navbar/>
              
      <Switch >
        <Route exact path="/" element={<Homepage />}/>
      
      </Switch>
    </Router>
  );
}

export default App;
