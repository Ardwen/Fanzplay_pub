import {db} from "./firebase"

export function getGames(){
    let gamelist=[];
    db.collection('Games').get().then((snapshot)=>{
             snapshot.docs.forEach(doc=>{
                // games.push(doc.data());
                let gid=doc.id;
                let location=doc.get('location');
                let qlist=doc.get('qlist');
                let tlist=doc.get('tlist');
                let time=doc.get('time');
                let totalR1=doc.get('totalResult1');
                let totalR2=doc.get('totalResult2');
                gamelist.push({
                    "gid":gid,
                    "location":location,
                    "qlist":qlist,
                    "tlist":tlist,
                    "time":time,
                    "totalResult1":totalR1,
                    "totalResult2":totalR2
                });
            })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };
 export function getGameId(gid){
    let gamelist=[];
    db.collection('Games').doc(gid).get().then((doc)=>{
        // snapshot.docs.forEach(doc=>{
            let gid=doc.id;
            let location=doc.get('location');
            let qlist=doc.get('qlist');
            let tlist=doc.get('tlist');
            let time=doc.get('time');
            let totalR1=doc.get('totalResult1');
            let totalR2=doc.get('totalResult2');
               gamelist.push({
                    "gid":gid,
                    "location":location,
                    "qlist":qlist,
                    "tlist":tlist,
                    "time":time,
                    "totalResult1":totalR1,
                    "totalResult2":totalR2
                });

    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };
 export function getGame1Tid(tid){
    let gamelist=[];
    db.collection('Games').where('tlist','array-contains-any',[tid]).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let gid=doc.id;
            let location=doc.get('location');
            let qlist=doc.get('qlist');
            let tlist=doc.get('tlist');
            let time=doc.get('time');
            let totalR1=doc.get('totalResult1');
            let totalR2=doc.get('totalResult2');
               gamelist.push({
                    "gid":gid,
                    "location":location,
                    "qlist":qlist,
                    "tlist":tlist,
                    "time":time,
                    "totalResult1":totalR1,
                    "totalResult2":totalR2
                });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };
 export function getGame2Tid(tid1,tid2){
    let gamelist=[];
    db.collection('Games').where('tlist','array-contains-any',[tid1,tid2]).get().then((snapshot)=>{
        snapshot.docs.forEach(doc=>{
            let gid=doc.id;
            let location=doc.get('location');
            let qlist=doc.get('qlist');
            let tlist=doc.get('tlist');
            let time=doc.get('time');
            let totalR1=doc.get('totalResult1');
            let totalR2=doc.get('totalResult2');
               gamelist.push({
                    "gid":gid,
                    "location":location,
                    "qlist":qlist,
                    "tlist":tlist,
                    "time":time,
                    "totalResult1":totalR1,
                    "totalResult2":totalR2
                });
        })
    }).catch((error)=>{console.log("Unexpected error: "+error)});
    return gamelist;
 };
//  export function addGame(qlist,tlist,time,totalResult1,totalResult2){

//  };
//  export function updateGame();
