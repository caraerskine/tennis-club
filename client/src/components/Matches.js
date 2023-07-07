import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
// import { MatchesContext } from '../context/matches'
// import { ClubsContext } from '../context/clubs'

function Matches() {

  const { user } = useContext(UserContext);
  // const { clubs } = useContext(ClubsContext);
  // const { matches } = useContext(MatchesContext);

  if (!user || !user.matches) {
    return <div>Loading...</div>;
  }

  if (user.matches && user.matches.length === 0) 
    return (
    <div>
      <h3>{user.name} it looks like you don't have any matches scheduled yet.</h3>
          <Link to={`/clubs`}>
            <button>Add a Match to a Club</button>
          </Link>
    </div>
  );


if (user.matches && user) {
  const displayMatches = user.matches.map((match) => {
    <MatchCard 
      key={match.id}
      club={match.club}
      date={match.date}
      time={match.time}
      skill_level={match.skill_level}
      contact_info={match.contact_info}
      status={match.status}
    />
    console.log("user matches", user.matches)
    console.log(typeof user.matches)
})
  return <div className="App"> 
            {displayMatches} 
            <>
              <div>
                <Link to={`/matches/pending`}>
                <button>Pending Matches</button>
                </Link>
                <Link to={`/matches/accepted`}>
                <button>Accepted Matches</button>
                </Link>
                <Link to={`/matches/completed`}>
                  <button>Completed Matches</button>
                </Link>
              </div>
            </>
          </div>
}
  return <div></div>
}

export default Matches

//if no matches, prompt to add button 

//if matches, show pending matches and accepted matches buttons

//make this render MatchCard

//would these routes need to be match.id? 