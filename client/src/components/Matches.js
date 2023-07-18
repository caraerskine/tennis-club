import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);
  const [selectedStatus, setSelectedStatus] = useState("All matches");

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

  const filteredTennisMatches = selectedStatus === "All matches"
    ? user.matches
    : user.matches.filter((match) => match.status === selectedStatus);


return (
  <div className="App"> 
  <br></br>
  <br></br>
  <SplitButton  selectedStatus = {selectedStatus} setSelectedStatus = {setSelectedStatus} />
       
        {filteredTennisMatches.map((match) => {
            const compositeKey = `${match.id}-${match.phone}`;


   return ( <MatchCard
        key={compositeKey}
        club={match.club_name}
        id={match.id}
        datetime={match.datetime}
        skill_level={match.skill_level}
        phone={match.phone}
        status={match.status}
        avatar={user.avatar_url}
      />
    );
  })}  
  </div>
  );
}


export default Matches