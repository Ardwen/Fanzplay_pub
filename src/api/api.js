export const resultsURL = "https://us-central1-fanzplay.cloudfunctions.net/api/Results"
export const questionURL="https://us-central1-fanzplay.cloudfunctions.net/api/Questions"
export const teamsURL="https://us-central1-fanzplay.cloudfunctions.net/api/Teams";
// export const gamesURL="https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Games?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0"
export function gameURL(gid){
  return "https://firestore.googleapis.com/v1/projects/fanzplay/databases/(default)/documents/Games/"+gid+"?key=AIzaSyComkk4cpC6-8qoh7m0U9PQsAn2f0A15Y0";
}
export const gamesURL = "https://us-central1-fanzplay.cloudfunctions.net/api/Games"
export const usersURL = "https://us-central1-fanzplay.cloudfunctions.net/api/Users"