import React, { Component } from 'react';
import axios from 'axios';
import Header from './header.js';
import {Link} from "react-router-dom";
import Button from './button';
import {getGames} from '../service/gamefunc';
import './game.css';
import {gamesURL} from "../api/api2";


class GameList extends Component {
    constructor() {
        super();
        this.state = {
          game_list:null,
          games:[],
          fetchedgame:false,
          team1:null,
          team2:null,
          gamename:null,
          place:null,
          time:null,
          teampicked:false,
          team:null,
          t1:null,
          t2:null
        }
        this.pickTeam = this.pickTeam.bind(this);
        this.fetchGame = this.fetchGame.bind(this);
    }

    componentDidMount() {
      axios.get(gamesURL).then(res => {
            this.setState({ game_list: res.data.documents })
            console.log(this.state.game_list)
            let g = this.state.game_list.map((it)=>{return(it.fields.name.stringValue)});
            this.setState({ games: g })
            console.log(this.state.games)
        })
        //this.setState({ games: })
    }

    fetchGame(idx) {
      let chosengame=this.state.game_list[idx].fields;
      this.setState({
          gamename:chosengame.type.stringValue,
          fetchedgame:true,
          place:chosengame.location.stringValue,
          time:chosengame.date.timestampValue,
          team1:chosengame.logos.arrayValue.values[0].stringValue,
          team2:chosengame.logos.arrayValue.values[1].stringValue,
          t1:chosengame.team1.stringValue,
          t2:chosengame.team2.stringValue
      })
      let gamename=this.state.game_list[idx].name.split("/")
      localStorage.setItem('team1', chosengame.logos.arrayValue.values[0].stringValue);
      localStorage.setItem('team2', chosengame.logos.arrayValue.values[0].stringValue);
      localStorage.setItem('gid', gamename[gamename.length-1]);
    }


    pickTeam(tid,t){
           //this.socket.emit('question-answered', {name: this.props.nickname, answer: num, pin: this.props.selectedPin})
         this.setState({
             teampicked:true,
             team:t
           })
         localStorage.setItem('tid', tid);
         localStorage.setItem('team', t);
    }

    render() {
        let { game_list,games,fetchedgame,team1,team2,gamename,place,time,teampicked,team,t1,t2 } = this.state;
        return (
            <div className='component-container' >
            <Header />
              {!fetchedgame?
                <div className='center' >
                <h2>Pick a Game to join</h2>
                <div className='center' >
                {games.map((item, i) => {
                    return (
                            <Button
                            key={i}
                            onClick={()=>this.fetchGame(i)}
                            id={item}
                            >
                            {item}
                            </Button>
                          );})}
                </div>
                </div>
                :
                !teampicked?
                   <div>
                    <div className='center' >
                        <h2 >Pick your team</h2>
                    </div>
                    <div className='center' >
                    <div className="grid-container">
                      <div className="grid-item"><button onClick={()=>this.pickTeam(t1,team1)}><img src={team1} style={{width: "100%"}}/></button></div>
                      <div className="grid-item"><button onClick={()=>this.pickTeam(t2,team2)}><img src={team2} style={{width: "100%"}}/></button></div>
                    </div>
                    </div>
                    <div className='center' >
                        <p >{gamename}</p>
                        <br/>
                        <p >{place}</p>
                        <br/>
                        <p >{time}</p>
                    </div>
                    </div>
                :
                <div className='center' >
                    <h2 className='player-name'>Today you are playing for</h2>
                    <br />
                      <img src={team} style={{width: "40%"}}/>
                    <br />
                    <div className='center' >
                    <Link to='/game'>
                        <button className='button'>
                            ready?
                        </button>
                    </Link>
                    </div>
                    </div>
              }
            </div>
        )
    }
}

export default GameList;
