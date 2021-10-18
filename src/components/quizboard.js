import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.js';
import GameQuestionOver from './question_over';
import Button from './button';
import {questionURL,gameURL,qURL,resultsURL} from "../api/api2";

class Game extends Component {
    constructor() {
        super();
        this.state = {
            gid:null,
            timer: 4,
            isLive: false,
            questionOver: false,
            gameStart:false,
            gameOver: false,
            team1:null,
            team2:null,
            team1_points:0,
            team2_points:0,
            win:false,
            team: null,
            question:null,
            answer:[],
            selectedAnswer:-1,
            correctAnswer:-1,
            seconds:0,
            curQuiz: -1,
            question_list:[],
            score:0,
            uid:null,
            tid:null
        }
        this.questionOver = this.question_Over.bind(this);
        this.nextQuestion = this.nextQuestion.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.end_game = this.end_game.bind(this);
    }
    componentDidMount() {
        this.setState({
          gid:localStorage.getItem('gid'),
          uid:localStorage.getItem('uid'),
          tid:localStorage.getItem('tid'),
          team:localStorage.getItem('team')});
          axios.get(questionURL).then(res => {
                let data = res.data.documents.map((it)=>{return(it.name)});
                this.setState({
                   question_list:data
                 });
            })
          /*const firebaseRef = firebase.database().ref(this.props.firebaseRef);
          const questionCountRef = ref(db, '/Questions/q2');

          onValue(questionCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log()
          });*/

    }

    tick() {
      if (this.state.seconds === this.state.timer) {
        this.end_timer()
      } else {
        this.setState((prevState) => ({
          seconds: prevState.seconds + 1
        }));
      }
    }

    start_timer() {
      this.interval = setInterval(() => this.tick(), 1000);
    }

      async end_timer() {
      clearInterval(this.interval);
      axios.get(gameURL(this.state.gid)).then(res => {
            let data = res.data.fields
            let p1=parseInt(data.totalResult1.integerValue)
            let p2=parseInt(data.totalResult2.integerValue)
            let score = this.state.score
            if(this.state.selectedAnswer===this.state.correctAnswer){
              score=score+1
              if (this.state.team===this.state.team1){
                p1=p1+1
                if (this.state.curQuiz+1===this.state.question_list.length){this.end_game(p1,p2,score)}
                axios.put("https://us-central1-fanzplay.cloudfunctions.net/api/Games/"+this.state.gid, {totalResult1:p1});
              } else {
                p2=p2+1
                if (this.state.curQuiz+1===this.state.question_list.length){this.end_game(p2,p1,score)}
                axios.put("https://us-central1-fanzplay.cloudfunctions.net/api/Games/"+this.state.gid, {totalResult2:p2});
              }
            }
            this.setState({
               team1_points:(p1/(p1+p2)*100).toFixed(1),
               team2_points:(p2/(p1+p2)*100).toFixed(1),
               team1:data.logos.arrayValue.values[0].stringValue,
               team2:data.logos.arrayValue.values[1].stringValue,
               questionOver:true,
               seconds: 0,
               score: score
             });

        })
    }

    startGame() {
            this.nextQuestion()
            this.setState({
                isLive: true,
                gameStart:true
            })
    }

    question_Over() {
        this.setState({
            questionOver: true
        })
    }

    end_game(t,o,score) {
      if (t>o){
      this.setState({
          questionOver: true,
          gameOver: true,
          win: true
      })}else{
        this.setState({
            questionOver: true,
            gameOver: true,
            win: false
        })
      }
      axios.post(resultsURL, {
          gid: this.state.gid,
          uid: this.state.uid,
          score:score,
          tid: this.state.tid
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    nextQuestion() {
      let a = this.state.curQuiz+1
      if (a==this.state.question_list.length){this.end_game()}else{
      console.log(qURL(this.state.question_list[a]))
      axios.get(qURL(this.state.question_list[a])).then(res => {
        let data=res.data.fields;
        this.setState({
          question: data.question.stringValue,
          answer:data.answers.arrayValue.values,
          correctAnswer: parseInt(data.correctIdx.integerValue),
          questionOver:false,
          isLive:true,
          curQuiz: a});
          this.start_timer();
        });}
    }


    submitAnswer(id) {
      //axios.put()
      this.setState({
          selectedAnswer: id
      })
    }

    render() {
        console.log(this.state)
        let {timer,isLive, questionOver,gameStart,gameOver,team1,team2,team1_points,team2_points, win,team,question,answer,selectedAnswer,correctAnswer,seconds} = this.state;
        let timeLeft = timer - seconds;
        return (
            <div className='component-container' >
            <Header />
                {
                    !isLive && !questionOver && !gameOver ?
                        <div className='center' >
                        <div>
                              <h3>You are playing for</h3>
                              <img src={team} style={{width: "60%"}}/>
                        </div>
                            <h2>We will let you know when it's time to play</h2>
                            <button className="button" onClick={()=>this.nextQuestion()}>start</button>
                        </div>
                        :
                        //questionBoard
                        isLive && !questionOver && !gameOver ?
                        <div className='questions-container' >
                            <div className='center' >
                            <h2>{timeLeft}</h2>
                            <br/>
                            <br/>
                            <p className='player-name'>{question}</p>
                            <div className='center' >
                            {answer.map((item, i) => {
                                return (
                                        <Button
                                        key={i}
                                        onClick={()=>this.submitAnswer(i)}
                                        id={i}
                                        >
                                        {item.stringValue}
                                        </Button>
                                    );})}
                              </div>
                            </div>
                        </div>
                            :
                            <div>
                            <GameQuestionOver
                                team1={team1}
                                team2={team2}
                                team1_p={team1_points}
                                team2_p={team2_points}
                                lastQuestion={gameOver}
                                correct={selectedAnswer===correctAnswer}
                                gameOver={gameOver}
                                win={win}  />
                                {!gameOver?
                                <div className="center">
                                <button className="button" onClick={()=>this.nextQuestion()}>nextQuestion</button>
                                </div>:""}
                          </div>
                }
            </div>
        )
    }
}
export default Game;
