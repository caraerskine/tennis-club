import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'

function Matches() {

  const { user } = useContext(UserContext);
 
  if (user.matches && user.matches.length === 0) 
    return (
    <div>
      <h3>It looks like you don't have any matches scheduled yet.</h3>
          <Link to={`/clubs`}>
            <button>Add a Match to a Club</button>
          </Link>
    </div>
  );

  console.log("user matches", user.matches)

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
    
})
  return <div className="App"> {displayMatches} </div>
}
  return <div></div>
}

export default Matches

//if no matches, prompt to add button 

//if matches, show pending matches and accepted matches buttons

//make this render MatchCard