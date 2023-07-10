import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);
 
  if (!user || !user.matches) {
    return <div>Loading...</div>;
  }

  if (user.matches.length === 0) {
    return (
    <div>
      <h3>{user.name} it looks like you don't have any matches scheduled yet.</h3>
          <Link to={`/clubs`}>
            <button>Add a Match to a Club</button>
          </Link>
    </div>
  );
 }

 console.log("Club object:", user)

return (
  <div className="App"> 
          {user.matches.map((match) => {

   return <MatchCard
        key={match.id}
        club={match.club.club_name}
        id={match.id}
        datetime={match.datetime}
        // formattedDateTime={formattedDatetime(match.datetime)}
        skill_level={match.skill_level}
        phone={match.phone}
        status={match.status}
        avatar={user.avatar_url}
      />
  })}
          <SplitButton />
  </div>

  );
}


export default Matches