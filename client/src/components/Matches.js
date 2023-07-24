import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);
  const [selectedStatus, setSelectedStatus] = useState("All Matches");
  const [filteredTennisMatches, setFilteredTennisMatches] = useState(user.matches || [])
  //made above state for Usereffect
  // === chceks both strings
  // == checss same value
console.log("user dot matches", user.matches)


  useEffect(() => {
    setFilteredTennisMatches( selectedStatus === "All Matches" 
    ? user.matches || []
    : user.matches.filter((match) => statusMapping[match.status].toLowerCase() === selectedStatus.toLowerCase()));
  }, [selectedStatus, user])


  if (!user || !user.matches) {
    return (
      <ul>
        <h4>Please login to see your matches!</h4>
      </ul>
    )
  };


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
//  console.log("Club object:", user)
//  console.log("matches", user.matches)
 
  const statusMapping = {
    completed: "Completed Matches",
    accepted: "Accepted Matches",
    pending: "Pending Matches",
    rejected: "Rejected Matches",
  };

  //for splitbutton
  //put my selctedStatus logic into useEffect

 
  
  
//     if (user && user.matches) {
// } else {
//        <p>Loading what is going on...</p>
//   console.log("User matches data not available.");
//     console.log("user:", user);
//     console.log("user.matches:", user.matches);
    console.log("selectedStatus:", selectedStatus);
//     console.log("statusMapping[match.status]:", statusMapping[match.status]);
    console.log("filteredTennisMatches:", filteredTennisMatches);
// }

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
    
          return (
            <MatchCard
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
          );
        })}
      </div> 
    );
  }

export default Matches

//I need to map over the users matches
//serialize comments to each match
//are comments available to each match?

//provide that match to each match card
//so does this need to be a child of MatchCard ?

//and then that can map over the comments which are then proivded to the comments section

//user has matches


// key={compositeKey}
  