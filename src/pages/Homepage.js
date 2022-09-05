import {useState} from "react";
import "../styles/Homepage.css"
import Button from 'react-bootstrap/Button';
import FrontPG from "../images/frontPg.png";
function Homepage(){

    return(
        <div class="text-center" >
        <header>
            <h1>The New Student</h1>
        </header>
        <img width={600} height={600} src={FrontPG}></img>
        <div >
        <Button variant="secondary" >
            Log in
        </Button>

        </div>
        
        </div>

    );
}
export default Homepage