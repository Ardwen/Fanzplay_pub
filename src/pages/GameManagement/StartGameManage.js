import React, {useState} from "react";
import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import {BackToCenterButton, ManagementCard} from "../ManageGame";
import {quizlist} from "../../mockdata";
import {Button, ListGroup, Nav} from "react-bootstrap";
import NavSection from "../components/NavSection";
import axios from "axios";
import {questionURL} from "../../api/api";

const StartGameManage = () =>{
    const location = useLocation() // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    const [qidlist, setQidList] = useState(thisGame.qidlist)  // get the quiz list for the current game
    const [randomIdx, setRandomIdx] = useState(Math.floor((Math.random()*qidlist.length)))
    const [quizDone, setQuizDone] = useState((qidlist.length==0))
    const [currentQuiz, setCurrentQuiz] = useState(null)
    React.useEffect(()=>{
        console.log(qidlist[randomIdx])
        axios.get(questionURL+`/${qidlist[randomIdx]}`).then((response) =>{
                setCurrentQuiz(response.data)
            }
        ).catch((err) => console.error(err))
    }, [randomIdx])


    const handlePushQuestion = (e) =>{

        qidlist.splice(randomIdx,1);
        setRandomIdx(Math.floor((Math.random()*qidlist.length)))
        console.log(qidlist)
        setQuizDone((qidlist.length == 0))
    }

    if (currentQuiz === null){
        return(<div>Loading...</div>)
    }
    return(
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                    <h1 style={{color: "#afe607"}}>Game Start</h1>
                    <GameInfos thisGame={thisGame} />
                    {/*<div style={{color: "white"}}>{qidlist[randomIdx]}</div>*/}
                    <QuizDisplay quiz = {currentQuiz}/>
                    <div>
                        {quizDone ? (
                             <BackToCenterButton text={"End Game"} />
                        ):(
                             <Button onClick={handlePushQuestion}>Push Question</Button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

const QuizDisplay = ({quiz}) =>{

    return(
        <div>
            <h3 style={{color: "white"}}>{quiz.question}</h3>
            <ListGroup as="ul">
                {Array.from(quiz.answers).map((answer, idx) => (
                    <ListGroup.Item key={`answer${idx}`} as="li">
                        {answer}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}

export default StartGameManage;