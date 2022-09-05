
import './App.css';
import Homepage from './pages/Homepage';
import Menu from "./components/menu";
import {BrowserRouter as Router, Routes as Switch, Route,NavLink} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
  
    <Router>
     <Menu />
              
      <Switch >
        <Route exact path="/" element={<Homepage />}/>
        <Route path='/storybook' element={<b/>}></Route>
      </Switch>
    </Router>
  );
}

export default App;
