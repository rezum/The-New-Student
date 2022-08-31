import React from "react";
import Modal from "react-bootstrap/Modal";

function SettingsModal(props){
    const {hideModal,isOpen}=props;
    return(
        <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
                <Modal.Title>Settings</Modal.Title>
    
            </Modal.Header>
            <Modal.Body>
                <h5>Closed Captioning</h5>
                <button className="btn2">On</button>
                <button className="btn2">Off</button>
            </Modal.Body>
            <Modal.Footer>
                <button className=" btn2 btn-danger" onClick={hideModal}>Exit</button>
            </Modal.Footer>
        </Modal>
    )
}
export default SettingsModal