import React, {useState} from "react";
import {Button, Offcanvas} from "react-bootstrap";
import NavSection from "./components/NavSection";

function Setting(){
    return (
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                     <OffCanvasExample key={"offcanvasBtn"} placement={"end"} name={"end"} />
                </div>
            </div>
        </>
    )
}

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Setting;