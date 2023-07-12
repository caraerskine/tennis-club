import React, { useContext } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);

  const datetime = '2023-09-21T07:30:00.000Z';
 
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

 //for each match get the opponent name that is equal to recevier_id
 //grab info about the opponent and the name
 //set recevier id and set opponent name
 //use association belongs to the user and the receiver (both users)
 //how do i get the user that hthe match belogns to to belong to two different users

return (
  <div className="App"> 
          {user.matches.map((match) => {

            // user.opponents.find()

   return <MatchCard
        key={match.id}
        club={match.club.club_name}
        id={match.id}
        // datetime={match.datetime}
        datetime={match.datetime}
        //want to show name of opponent
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