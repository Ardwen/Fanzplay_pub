import React from 'react'
import {useLocation, Link, useHistory} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import GameInfos from "./components/GameInfos";
import NavSection from "./components/NavSection";

const ManageGame = () =>{
    const location = useLocation();
    const thisGame = location.state.thisGame;
    return(
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                    <GameInfos thisGame={thisGame} />
                    <Buttons />
                    <BackToCenterButton text={"Back To Center"} />
                </div>
            </div>
        </>
    )
}

const Buttons = ()=>{
    const buttons = [
        {bid:"pre", button: "Pre Game Management",
        description: "Manage quiz questions & pre-event settings"},
        {bid:"mid", button: "Mid Game Management",
        description: "Start a new game and manage during game"},
        {bid:"end", button: "End Game Management",
        description: "Check game results"}
    ]
    return(
        <div className={"buttons"}>
            {Array.from(buttons).map((item, idx) => (
                <ManagementCard item = {item} key={`button${idx}`}/>
            ))}

        </div>

    )

}

const ManagementCard = ({item}) =>{
    const location = useLocation();
    const pathnamelist = location.pathname.split('/')
    const gid = pathnamelist[pathnamelist.length-1]
    return(
        <Link
            style = {{textDecoration: "none", color: "black"}}
            to={{pathname:`/${item.bid}/${gid}`,
            state:{thisGame: useLocation().state.thisGame}}}>
          <Card className="text-center" style={{margin: "5vh 5vw"}}>
                  <Card.Body>
                    <Card.Title>{item.button}</Card.Title>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    {/*<Link*/}
                    {/*    to={{pathname:`/${item.bid}/${gid}`,*/}
                    {/*    state:{thisGame: useLocation().state.thisGame}}}*/}
                    {/*>*/}
                    {/*    <Button variant="primary" >GO</Button>*/}
                    {/*</Link>*/}
                  </Card.Body>
                </Card>
        </Link>
    )
}

const BackToCenterButton = ({text}) =>{
    return(
           <Link to={'/home'}>
                <Button>{text}</Button>
           </Link>
    )
}

export {ManagementCard, BackToCenterButton};
export default ManageGame;