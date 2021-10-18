const mygamelist = [
    {
        gid: "g1",
        name: "UNC vs. Duke",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/North_Carolina_Tar_Heels_logo.svg/973px-North_Carolina_Tar_Heels_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/640px-Duke_Blue_Devils_logo.svg.png"],
        date: "Oct 1",
        time: "1PM",
        location: "Dean Dome",
        quizNum: 80,
        qidlist:[1,2,3]
    },
    {
        gid: "g2",
        name: "Wake Forest vs. Florida",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wake_Forest_University_Athletic_logo.svg/640px-Wake_Forest_University_Athletic_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"],
        date: "Oct 11",
        time: "5PM",
        location: "XXX",
        quizNum: 10,
        qidlist:[1,2]
    },
    {
        gid: "g3",
        name: "Michigan vs. Rutgers",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/640px-Michigan_Wolverines_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rutgers_Scarlet_Knights_logo.svg/640px-Rutgers_Scarlet_Knights_logo.svg.png"],
        date: "Oct 21",
        time: "6PM",
        location: "XXX",
        quizNum: 20,
        qidlist:[1,2,3,4]
    },
    {
        gid: "g4",
        name: "Virginia vs. Miami",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/1200px-Virginia_Cavaliers_sabre.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Miami_Hurricanes_logo.svg/640px-Miami_Hurricanes_logo.svg.png"],
        date: "Oct 29",
        time: "2PM",
        location: "XXX",
        quizNum: 30,
        qidlist:[1,4]
    }
]

const newgamelist = [
        {
        gid: "g5",
        name: "Duke vs. Florida",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Duke_Blue_Devils_logo.svg/640px-Duke_Blue_Devils_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/1/14/Florida_Gators_gator_logo.svg/1200px-Florida_Gators_gator_logo.svg.png"],
        date: "Oct 8",
        time: "2PM",
        location: "XXX",
        quizNum: 30,
        qidlist:[1,2,3,4]
    },
    {
        gid: "g6",
        name: "NC state vs. Virginia",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/North_Carolina_State_University_Athletic_logo.svg/640px-North_Carolina_State_University_Athletic_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Virginia_Cavaliers_sabre.svg/1200px-Virginia_Cavaliers_sabre.svg.png"],
        date: "Oct 10",
        time: "6PM",
        location: "XXX",
        quizNum: 30,
        qidlist:[1,2,3,4]
    },
    {
        gid: "g7",
        name: "UCLA vs. Oregon",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UCLA_Bruins_logo.svg/640px-UCLA_Bruins_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Oregon_Ducks_logo.svg/640px-Oregon_Ducks_logo.svg.png"],
        date: "Nov 20",
        time: "1PM",
        location: "XXX",
        quizNum: 30,
        qidlist:[1,2,3,4]
    },
    {
        gid: "g8",
        name: "USC vs. UCLA",
        type: "NCAA Men's Basketball",
        logos: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/USC_Trojans_logo.svg/640px-USC_Trojans_logo.svg.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/UCLA_Bruins_logo.svg/640px-UCLA_Bruins_logo.svg.png"],
        date: "Nov 30",
        time: "5PM",
        location: "XXX",
        quizNum: 30,
        qidlist:[1,2,3,4]
    }
]

const quizlist=[
    {
        qid: "q1",
        question:"Which coach has the most career NCAA fourmament wins?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 4,
    },
    {
        qid: "q2",
        question:"I was drafted by the Golden State Warriors and won the Slam Dunk Competition in Oakland. Who am I?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 3,
    },
    {
        qid: "q3",
        question:"Playing in the early 1990s, what number did Eric Montross wear on his unifom?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 3,
    },
    {
        qid: "a4",
        question:"Prior to the beginning of the NCAA Tournament in 1939, North Carolina was undefeated and voted National Champions in what year?",
        answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
        correct: 3,
    },
]

export {mygamelist, newgamelist, quizlist}