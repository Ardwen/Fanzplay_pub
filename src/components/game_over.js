import React from 'react';
import {Link} from 'react-router-dom';
import './game.css';


export default function GameOver(props){
    return(
      <div className='question-over-wrapper' >
          <div className='center' >
              <h3 className='player-name'>Here are the final results</h3>
          </div>
          <div class="grid-container">
          <div class="grid-item"><h2 class="grid">{props.team1_p+"%"}</h2><br/><img src={props.team1} style={{width: "60%"}}/></div>
          <div class="grid-item"><h2 class="grid">{props.team2_p+"%"}</h2><br/><img src={props.team2} style={{width: "60%"}}/></div>
          </div>
          <div className='center' >
          {
            props.win?
            <div className='center' >
            <h3 className='player-name'>Your team Won!</h3>
            <Link to='/rewards'>
            <button className='button'>
                pick your rewards!
            </button>
            </Link>
            </div>
            :
            <div className='center' >
            <h3 className='player-name'>Thanks for your participation, Try next time!</h3>
            <Link to='/gamelist'>
                <button className='button'>
                  Back to Game List
                </button>
            </Link>
            </div>
          }
          </div>
      </div>
    )
}
