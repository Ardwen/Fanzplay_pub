import React from "react";

const GameInfos = ({thisGame}) =>{

    return(
        <>
                <h1 className={"title"}>{thisGame.name}</h1>
                <p style={{color: "white"}}>
                    {thisGame.type} <br />
                    {thisGame.date}
                </p>
        </>
    )
}

export default GameInfos;