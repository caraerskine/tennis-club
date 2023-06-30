import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";

function Matches() {

  const { user } = useContext(UserContext);

  if (user.matches && user.matches.length === 0) 

  //below would take them to clubs to the addMatchForm

  return (
    <div>
      <p>Let's Play! Add a Match to a Club!</p>
          {/* <Link to={`/matches/new`}>
            <button>Add a Match to a Club</button>
          </Link> */}
    </div>
  );
}
//Your match cards are empty
//render <MatchCard />

//This logic would display their current matches on their current match cards
//need mui styling 

// if (user.matches && user) {
//   const displayMatches = user.matches.map((m) => {
    
//   return (
//       <div key={m.id}>
//         <ol>

//         </ol>
//       </div>
//         )
//   })
// }

export default Matches

//if no matches, prompt to add button 

//if matches, show pending matches and accepted matches buttons