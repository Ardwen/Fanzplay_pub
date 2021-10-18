import {auth,db} from "../service/firebase"
export function signup(email, password,admin) {
    auth().createUserWithEmailAndPassword(email, password).then(cred=>{
        db.collection('Users').doc(cred.user.uid).set({
            admin: admin
        });
    });
}

export async function signin(email, password) {
    return auth().signInWithEmailAndPassword(email, password).then(async cred=>{
        try {
            const document = db.collection('Users').doc(cred.user.uid);
            let doc = await document.get();
            let docid = doc.id;
            let data = doc.data();
            return { id: docid, ...data };
        } catch (error) {
            console.log(error);
        }
    });
}
