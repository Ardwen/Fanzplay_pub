import React, {useState} from "react";
import NavSection from "./components/NavSection";
import {Form, Button, Nav} from "react-bootstrap";
import axios from "axios";
import {gamesURL, teamsURL} from "../api/api";


const currentUser = "u2";
const AddCustomizeGame = () =>{

  const onFormSubmit = e => {
          e.preventDefault()
          const formData = new FormData(e.target)
          let formDataObj = Object.fromEntries(formData.entries())
            formDataObj['logos'] = Array.from([])
            // axios.get(teamsURL+`/${formDataObj.team1}`).then((response) => {
            //     // console.log(response.data.logo)
            //     formDataObj['logos'].push(response.data.logo)
            // }).catch((err) => console.error(err))
            // axios.get(teamsURL+`/${formDataObj.team2}`).then((response) => {
            //     // console.log(response.data.logo)
            //     formDataObj['logos'].push(response.data.logo)
            // }).catch((err) => console.error(err))
          formDataObj['logos'] = ["https://maceilautobody.com/wp-content/uploads/2018/06/logo-placeholder.png","https://maceilautobody.com/wp-content/uploads/2018/06/logo-placeholder.png"]
          formDataObj['qidlist'] = []
          formDataObj['quizNum'] = 0
          formDataObj['totalResult1'] = 0
          formDataObj['totalResult2'] = 0
          formDataObj['type'] = "NCAA Basketball Game"
          formDataObj['uid'] = currentUser
          // console.log(formDataObj)
            axios.post(gamesURL, formDataObj).then((response) =>{
                console.log(response.data)
                alert("Submit Form Successfully")
            }).catch((err) => console.error(err))
        }


  return (
      <>
          <NavSection />
          <div className={"background"}>
              <div className={"overlay"}>
                  <Form onSubmit={onFormSubmit} style={{backgroundColor: "white"}}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Game Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Game Name" name="name"/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Game Date</Form.Label>
                        <Form.Control type="text" placeholder="Enter Game Date" name="date"/>
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Game Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Game Location" name="location"/>
                      </Form.Group>

                      <Form.Select aria-label="Default select example" name = "team1">
                          <option>Select Team 1</option>
                          <option value="t1">UNC</option>
                          <option value="t2">Duke</option>
                          <option value="t3">Wake Forest</option>
                          <option value="t4">Florida</option>
                      </Form.Select>

                      <Form.Select aria-label="Default select example" name = "team2">
                          <option>Select Team 1</option>
                          <option value="t1">UNC</option>
                          <option value="t2">Duke</option>
                          <option value="t3">Wake Forest</option>
                          <option value="t4">Florida</option>
                      </Form.Select>

                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                  </Form>
                  <Button href={'/home'}>Back to My Game Center</Button>
              </div>
          </div>


      </>
  )

}

export default AddCustomizeGame;