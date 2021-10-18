import React from 'react';


export default function PlayerQuestionOver(props){
    return (
        <div>
            {
                props.answeredCorrect?
                <div className='answer correct' >
                    <h1 className='answer-indicator' >Correct</h1>
                </div>
                :
                <div className='answer incorrect' >
                    <h1 className='answer-indicator' >Incorrect</h1>
                </div>
            }
        </div>
    )
}
