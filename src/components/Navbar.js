import SettingsModal from "../components/SettingsModal"
import { useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Settings from "../images/settings.png";
function Navbar(props){
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <nav className="nav">
        <>
             <Button variant="primary" onClick={handleShow}>
        <img width={30} height={30} src={Settings} alt="Settings" ></img>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5>Closed Captioning</h5>
        <Button variant="secondary" >
            On
          </Button>
          <Button variant="primary">
            Off
          </Button>
          <h5>Language</h5>
          <Button variant="secondary" >
            English
          </Button>
          <Button variant="secondary" >
            Arabic
          </Button>
          <h5>Language</h5>
          <Button variant="secondary" >
            English
          </Button>
          <Button variant="secondary" >
            Arabic
          </Button>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </>

        </nav>
    );

}
export default Navbar;