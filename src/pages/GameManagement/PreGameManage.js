import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom";
import GameInfos from "../components/GameInfos";
import {quizlist} from "../../mockdata";
import {Button, Form} from "react-bootstrap";
import NavSection from "../components/NavSection";
import {questionURL} from "../../api/api";
import {gamesURL} from "../../api/api";
import axios from "axios";

const PreGameManage =() =>{
    const location = useLocation()
    // game info past in location.state.thisGame
    const thisGame = location.state.thisGame;
    const qidlist = thisGame.qidlist;
    const [currentlist, setList] = React.useState([]);

    React.useEffect(()=>{
        axios.get(questionURL).then((response)=>{
            setList(response.data.filter(q=>qidlist.includes(q.id)))
            }).catch((err)=>console.error(err))
    }, [])

    // //add question
    const [showQuestionForm, setQuestionForm] = useState(false);
    const showForm = () =>{
            const onFormSubmit = (e) =>{
                e.preventDefault()
                const formData = new FormData(e.target)
                let formDataObj = Object.fromEntries(formData.entries())

                let questionPost = {}
                questionPost['question'] = formDataObj.question
                questionPost['answers'] = [formDataObj.answer1, formDataObj.answer2, formDataObj.answer3, formDataObj.answer4]
                questionPost['correctIdx'] = parseInt(formDataObj.correctIdx)
                //may need to change these default values later
                questionPost['score'] = 1
                questionPost['time'] = 5
                questionPost['tid'] = formDataObj.tid

                let currentQidList = Array.from(thisGame.qidlist)

                axios.post(questionURL, questionPost).then((response) =>{
                    console.log(response.data.id)
                    currentQidList.push(response.data.id)
                    axios.put(gamesURL+`/${thisGame.id}`, {qidlist: currentQidList}).then(
                        (response)=>{
                            console.log(response.data)
                        }
                    )
                })

                setQuestionForm((false));
                // axios.put(gamesURL+`/${thisGame.id}`, {qidlist})
                // console.log(thisGame.id)
                // console.log(thisGame.qidlist)
                // console.log(questionPost)
            }
            return(
                <>
                  <Form onSubmit={onFormSubmit} style={{backgroundColor: "white"}}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Question</Form.Label>
                        <Form.Control type="text" placeholder="Enter Game Name" name="question"/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Answers</Form.Label>
                          <Form.Control type="text" placeholder="Enter Answer 1" name="answer1"/>
                          <Form.Control type="text" placeholder="Enter Answer 2" name="answer2"/>
                          <Form.Control type="text" placeholder="Enter Answer 3" name="answer3"/>
                          <Form.Control type="text" placeholder="Enter Answer 4" name="answer4"/>
                      </Form.Group>

                      <Form.Select aria-label="Default select example" name = "correctIdx">
                          <option>Select Correct Answer</option>
                          <option value="0">Answer 1</option>
                          <option value="1">Answer 2</option>
                          <option value="2">Answer 3</option>
                          <option value="3">Answer 4</option>
                      </Form.Select>

                      <Form.Select aria-label="Default select example" name = "tid">
                          <option>Select Team</option>
                          <option value="t1">UNC</option>
                          <option value="t2">Duke</option>
                          <option value="t3">Wake Forest</option>
                          <option value="t4">Florida</option>
                      </Form.Select>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                  </Form>
                </>
            )
        }
    return(
        <>
            <NavSection />
            <div className={"background"}>
                <div className={"overlay"}>
                    <h1 style={{color: "#afe607"}}>Pre Game Management</h1>
                    <GameInfos thisGame={thisGame} />
                    {currentlist.map((quiz, idx) =>(
                        <QuizBlock key={`quiz${quiz.id}`} quiz={quiz} />
                    ))}
                    <Button onClick={() => {setQuestionForm((true))}}>Add Question</Button>
                    {showQuestionForm? showForm():null}
                </div>
            </div>
        </>
    )
}

const QuizBlock =({quiz})=>{
    const style = {
            display: "block",
            background: "rgb(251 251 251 / 30%)",
            borderRadius: "0.5em",
            padding: "0.5em",
            color: "white",
            margin: "1em 0em"
    }

    return(
        <div style={style}>{quiz.question}
        </div>
    )
}


export default PreGameManage;