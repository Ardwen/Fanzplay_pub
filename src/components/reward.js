import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.js';
import {Link} from "react-router-dom";
import { Container,Row,Col } from 'react-bootstrap';
import './game.css';

const reward_list = [
  { id: 1, title: '15% off any NCAA team store purchase.', expire:"August 31, 2020", brand:"asset/brand1.png" },
  { id: 2, title: 'Half off any lunch or dinner entree.',expire:"December 31, 2020" ,brand:"asset/brand2.png" },
  { id: 3, title: '$15 off any purchase of $100 or more.', expire:"May 31, 2020",brand:"asset/brand3.png" }
];

class Reward extends Component {
    constructor() {
        super();
        this.state = {
          rewards:[],
          rewardpicked:false,
          reward:null
        }
        this.pickReward = this.pickReward.bind(this);
    }

    componentDidMount() {
        //axios.get(`/api/getquestions/${this.props.quiz.id}`).then(res => {
            //this.setState({ questions: res.data })
            //console.log(this.questions)
        //})
        this.setState({ rewards: reward_list })
    }

    confirmReward(id){
      console.log(id)
    }


    pickReward(t){
           //this.socket.emit('question-answered', {name: this.props.nickname, answer: num, pin: this.props.selectedPin})
         this.setState({
             rewardpicked:true,
             reward:t
           })
    }

    render() {
        let { rewards,rewardpicked,reward } = this.state;
        return (
            <div className='component-container' >
            <Header />
              {!rewardpicked?
                <div className='center' >
                <h2>Pick a Reward</h2>
                <Container>
                {rewards.map((item, i) => {
                    return (
                      <Row>
                        <Col sm={4}>
                        <button onClick={()=>this.pickReward(item)}>
                        <img
                          src={item.brand}
                          width="70"
                          height="70"
                      />
                        </button>
                        </Col>
                        <Col sm={8}>
                        <h4>{item.title}</h4>
                        <h4>{item.expire}</h4>
                        </Col>
                      </Row>
                    )})
                  }
                </Container>
                </div>
                :
                <div>
                    <div className='center' >
                        <h2 >Confirm your Rewards</h2>
                    </div>
                    <div className='center' >
                        <img
                          src={reward.brand}
                          width="70"
                          height="70"
                        />
                        <h3>{reward.title}</h3>
                        <h3>{reward.expire}</h3>
                        <div className='center' >
                        <Link to='/confirm'>
                            <button className='button' onClick={()=>this.confirmReward(reward.id)}>
                                confirm
                            </button>
                        </Link>
                        </div>
                  </div>
                </div>
              }
            </div>
        )
    }
}

export default Reward;
