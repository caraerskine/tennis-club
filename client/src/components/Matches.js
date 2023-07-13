import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import { format } from 'date-fns' 
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);


 
  if (!user || !user.matches) {
    return <div>Loading...</div>;
  }

  if (user.matches.length === 0) {
    return (
    <div>
      <h4>{user.name}, it looks like you don't have any matches scheduled yet.</h4>
          <Link to={`/clubs`}>
            <button>Add a Match to a Club</button>
          </Link>
    </div>
  );
 }
console.log("User:", user)
 console.log("Club object:", user)
 console.log("matches", user.matches)

 //for each match get the opponent name that is equal to recevier_id
 //grab info about the opponent and the name
 //set recevier id and set opponent name
 //use association belongs to the user and the receiver (both users)
 //how do i get the user that hthe match belogns to to belong to two different users

return (
  <div className="App"> 
          {user.matches.map((match) => {
            
   const formattedDatetime = format(new Date(match.datetime), 'MM/dd/yyyy, HH:mm')

   return <MatchCard
        key={match.created_at}
        // club={match.club.club_name}
        id={match.id}
        datetime={formattedDatetime}
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