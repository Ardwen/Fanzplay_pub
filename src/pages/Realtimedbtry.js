import React from "react";
import {getDatabase,set,ref,child, get } from "firebase/database";
import {Button} from "react-bootstrap";

const Realtimedbtry = () => {

    function writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }
    
    function getUserDataAll(){
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/`)).then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
          } else {
            console.log("No data available");
          }
        }).catch((error) => {
          console.error(error);
        });
    }

    return(
        <>
            <Button onClick={writeUserData("u3", "test","test","test")}>Push User</Button>
            <Button onClick={getUserDataAll()}>Get User</Button>

        </>
    )
}

export default Realtimedbtry;