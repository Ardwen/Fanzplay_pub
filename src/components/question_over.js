import React from 'react';
import GameOver from './game_over'
import PlayerQuestionOver from './question_result'
import './game.css';

export default function GameQuestionOver(props){
    return(
        <div>
            {!props.gameOver ?
            <div className='center' >
                <div className='center' >
                    <h3 className='player-name'>Here are the result so far</h3>
                </div>
                <div class="grid-container">
                  <div class="grid-item"><h2 class="grid">{props.team1_p+"%"}</h2><br/><img src={props.team1} style={{width: "100%"}}/></div>
                  <div class="grid-item"><h2 class="grid">{props.team2_p+"%"}</h2><br/><img src={props.team2} style={{width: "100%"}}/></div>
                </div>
                <div className='center' >
                    <h3 className='player-name'>Stay tuned for the next round</h3>
                </div>
            </div>
            :
            <GameOver win={props.win} team1={props.team1} team2={props.team2}
            team1_p={props.team1_p}
            team2_p={props.team2_p}/>
        }
        </div>
    );
}
