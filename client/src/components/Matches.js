import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/user";
import MatchCard from './MatchCard'
import { Link } from 'react-router-dom'
import SplitButton from "./SplitButton";

function Matches() {

  const { user } = useContext(UserContext);
  const [selectedStatus, setSelectedStatus] = useState("All Matches");
  const [filteredTennisMatches, setFilteredTennisMatches] = useState(user.matches || [])

console.log('users matches', user.matches)

const statusMapping = {
  completed: "Completed Matches",
  accepted: "Accepted Matches",
  pending: "Pending Matches",
  rejected: "Rejected Matches"
};

  // useEffect(() => {
  //   setFilteredTennisMatches( 
  //     selectedStatus === "All Matches" 
  //       ? user.matches || []
  //       : user.matches.filter((match) => {
  //         console.log("match.status", match.status)
  //         return (statusMapping[match.status].toLowerCase() === selectedStatus.toLowerCase()
  //         );
  //       })
  //   );
  // }, [selectedStatus, user]);

  //fixed above to below 
  //getting error on .toLowerCase directly on array of [statusMapping]

  useEffect(() => {
    setFilteredTennisMatches(
      selectedStatus === "All Matches"
        ? user.matches || []
        : user.matches.filter((match) => {
            console.log("match", match);
            const statusValue = statusMapping[match.status];
            return statusValue && statusValue.toLowerCase() === selectedStatus.toLowerCase();
          })
    );
  }, [selectedStatus, user]);


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
              opponentPic={match.opponent_pic}
              comments={match.comments}
              request={user.id == match.receiver_id}
            />
          );
        })}
      </div> 
    );
  }

export default Matches


  