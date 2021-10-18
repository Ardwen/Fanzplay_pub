import React from "react";
import {getDatabase, ref, set} from "firebase/database";

const AddQuestion = () =>{

    //add question
    function postQuestion(qid, question, tid, correctIdx) {
      const db = getDatabase();
      set(ref(db, 'questions/' + qid), {
          question: question,
          score: 1,
          answers: ["Answer1", "Answer2", "Answer3", "Answer4"],
          tid: tid,
          correctIdx: correctIdx
      });
    }

    return(
        <>
            <div className={"background"}>
                <div className={"overlay"}>
                    <h1>Add Quiz Question</h1>
                </div>
            </div>
        </>
    )
}

export default AddQuestion;