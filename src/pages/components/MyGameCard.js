import {Button, Card, Col, Modal, Row} from "react-bootstrap";
import React, {useState} from "react";
import {Link} from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{textAlign: "center"}}>
            {props.game.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
              alignItems: "center"}}>
              <img src={props.game.logos[0]} style={{width: "40%"}}/>
              <span style={{padding: "0 0.5em", fontSize:"1.5em"}}>vs.</span>
              <img src={props.game.logos[1]} style={{width:"40%"}} />
          </div>
          <p style={{textAlign:"center"}}>
                Game Date: {props.game.date}<br />
                Location: {props.game.location}<br />
                Quiz Number: {props.game.quizNum}
          </p>
      </Modal.Body>
      <Modal.Footer>
          <Link to={{pathname: `/manageGame/${props.game.id}`,
              state:{thisGame:props.game}
            }}>
              <Button>Manage Game</Button>
          </Link>

        <Button onClick={props.onHide}
                style={{backgroundColor: "cadetblue", border: "cadetblue"}}
        >Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MyGameCard = ({game, addIcon}) =>{
    const [cardShow, setCardShow] = useState(false);

    return (
        <>
           <Col>
              <Card onClick={() => setCardShow((true))} style={{cursor: "pointer"}}>
                      <Card.Header
                          style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          textAlign: "center",
                          alignItems: "center"}}>
                          <Card.Img variant="top" src={game.logos[0]} />
                          <span style={{padding: "0 0.5em", fontSize:"1.5em"}}>vs.</span>
                          <Card.Img variant="top" src={game.logos[1]} />
                      </Card.Header>

                    <Card.Body>
                      <Card.Title>{game.name}</Card.Title>
                      <Card.Text>
                          {game.date}
                      </Card.Text>
                    </Card.Body>
                      {addIcon}
                  </Card>
           </Col>

           <MyVerticallyCenteredModal
                show={cardShow}
                onHide={() => setCardShow(false)}
                game = {game}
           />
        </>
    )
}

export default MyGameCard;