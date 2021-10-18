import React from "react";
import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import axios from "axios";
import {resultsURL} from "../../api/api";
import {ListGroup, Row, Col} from "react-bootstrap";

const EndGameManage = () =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    return(
        <>
            <div className={"background"}>
                <div className={"overlay"}>
                    <h1 style={{color: "#afe607"}}>Game Result Leaderboard</h1>
                    <GameInfos thisGame={thisGame} />
                    <LeaderBoard key={`board${thisGame.id}`} game = {thisGame}></LeaderBoard>
                </div>
            </div>

        </>
    )
}

const LeaderBoard = ({game}) =>{
    const [resultList, setResultList] = React.useState(Array.from([]));
      React.useEffect(() => {
        axios.get(resultsURL).then((response) => {
            //filter the result list for only this game
          setResultList(response.data.filter(r => r.gid == game.id))

        });
      }, []);

      console.log(resultList)
    let t1List = resultList.filter(result => result.tid == "t1").sort((a,b) => b.score - a.score)
    let t2List = resultList.filter(result => result.tid == "t2").sort((a,b) => b.score - a.score)
    let t1Score = t1List.map(result => parseInt(result.score)).reduce((a,b) => a+b,0)
    let t2Score = t2List.map(result => parseInt(result.score)).reduce((a,b) => a+b,0)
    console.log(t1Score)
    console.log(t2Score)

    return(
        <div>
            <Row>
                <Col>
                    <h3 style={{color:"white"}}>Total Score: {t1Score}</h3>
                    <ListGroup variant="flush">
                        {Array.from(t1List).map((result) => (
                             <ListGroup.Item key={`result${result.uid}`}>{result.uid}: {result.score}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
                <Col>
                    <h3 style={{color:"white"}}>Total Score: {t2Score}</h3>
                    <ListGroup variant="flush">
                        {Array.from(t2List).map((result) => (
                             <ListGroup.Item key={`result${result.uid}`}>{result.uid}: {result.score}</ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}



export default EndGameManage;