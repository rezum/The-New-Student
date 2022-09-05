import SettingsModal from "./SettingsModal"
import { useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Settings from "../images/settings.png";
import '../styles/menu.css'
function Menu(props){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [msg, setMsg]=useState('Save Settings')
  const handlechange=()=>setMsg("Save Settings")
  const saveChange=()=>setMsg('Saved')
    return(
        <nav className="nav">
        <>
             <Button variant="primary" onClick={handleShow}>
        <img width={30} height={30} src={Settings} alt="Settings" ></img>
      </Button>

      <SettingsModal
      msg={msg}
      show={show} 
      onHide={handleClose}
      handleClose={handleClose} 
      handlechange={handlechange}
      saveChange={saveChange}>
      
      </SettingsModal>
        </>
        
        </nav>
    );

}
export default Menu;