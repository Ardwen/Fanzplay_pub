export const resultsURL = "https://us-central1-fanzplay.cloudfunctions.net/api/Results"
export const questionURL="https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Questions?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0"
export const teamsURL="https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Teams?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0";
export const gamesURL="https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Games?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0"
export function gameURL(gid){
  return "https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Games/"+gid+"?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0";
}
export function qURL(qid){
  return "https://firestore.googleapis.com/v1/"+qid+"?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0";
}
export function AURL(gid){
  return "https://firestore.googleapis.com/v1/"+gid+"?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0";
}
