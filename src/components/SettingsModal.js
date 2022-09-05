import React from "react";
import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
function SettingsModal(props){
    const {handleClose,show}=props;
    const [msg, setMsg]=useState('Save Settings')
    const handlechange=()=>setMsg("Save Settings")
    const saveChange=()=>setMsg('Saved')
    
    return(
        <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Audio</h5>
            <Button variant="secondary" onClick={handlechange}>
            On
          </Button>
          <Button variant="secondary"onClick={handlechange} >
            Off
          </Button>
            <h5>Closed Captioning</h5>
        <Button variant="secondary" onClick={handlechange}>
            English
          </Button>
          <Button variant="secondary"onClick={handlechange} >
            Arabic
          </Button>
          <h5>Animation</h5>
          <Button variant="secondary"onClick={handlechange} >
            On
          </Button>
          <Button variant="secondary"onClick={handlechange} >
            Off
          </Button>
          <h5>Avatar</h5>
          <Button variant="secondary"onClick={handlechange} >
            On
          </Button>
          <Button variant="secondary" onClick={handlechange}>
            Off
          </Button>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChange}>
           {msg}
          </Button>
          </Modal.Footer>
        </Modal>
    )
}
export default SettingsModal