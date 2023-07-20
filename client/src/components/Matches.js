import React, { useContext, useState } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);
  const [selectedStatus, setSelectedStatus] = useState("All matches");

  if (!user || !user.matches) {
    return (
   
      <ul>
        <h4>Please login to see your matches!</h4>
      </ul>
 
 
 )}

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
// console.log("User:", user)
//  console.log("Club object:", user)
//  console.log("matches", user.matches)
 
  const statusMapping = {
    completed: "Completed Matches",
    accepted: "Accepted Matches",
    pending: "Pending Matches",
    rejected: "Rejected Matches",
  };

  const filteredTennisMatches = selectedStatus === "All matches"
    ? user.matches
    : user.matches.filter((match) => statusMapping[match.status].toLowerCase() === selectedStatus.toLowerCase());

    // console.log("selectedStatus:", selectedStatus);
    // console.log("filteredTennisMatches:", filteredTennisMatches);

return (
  <div className="App"> 
    <br></br>
    <br></br>

      <SplitButton  
        selectedStatus={selectedStatus} 
        setSelectedStatus={setSelectedStatus} 
      />
       
        {filteredTennisMatches.map((match) => {
            const compositeKey = `${match.id}-${match.phone}`;


    //should I be saving the attrs below into a variable and then passing that into MatchCard instead
    //would that look better?

     
    return  <MatchCard
          key={compositeKey}
          club={match.club_name}
          id={match.id}
          datetime={match.datetime}
          skill_level={match.skill_level}
          phone={match.phone}
          status={match.status}
          avatar={user.avatar_url}
          comments={match.comments}
      />
    })}  
  </div>
  );
}


export default Matches