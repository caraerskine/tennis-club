import React, { useContext } from "react";
import { UserContext } from "../context/user";
import { Link } from "react-router-dom";

function Matches() {

  const { user } = useContext(UserContext);

  if (user.matches && user.matches.length === 0) 
    return (
    <div>
      <p>Let's Play! Add a Match to a Club!</p>
          {/* <Link to={`/matches/new`}>
            <button>Add a Match to a Club</button>
          </Link> */}
    </div>
  );

//Your match cards are empty
//render <MatchCard />

//This logic would display their current matches on their current match cards
//need mui styling 

//need to render <MatchCard /> and put below on match card

if (user.matches && user) {
  const displayMatches = user.matches.map((m) => {
    
  return (
      <div key={m.id}>
        <ol>
        <b>Club:</b> {m.club.name} <br />
                <b>Date:</b> {m.date} <br />
                <b>Time:</b> {m.time} <br />
                <b>Skill Level:</b> {m.skill_level ? "beginner" : "intermediate"}
                <br />
                <b>Contact info:</b> {m.contact_info} <br />
                <Link to={`/matches/${m.id}`}>
                  <button>Edit this Match</button>
                </Link>

        </ol>
      </div>
        )
  })
  return <div> {displayMatches} </div>
}
  return <div></div>
}

export default Matches

//if no matches, prompt to add button 

//if matches, show pending matches and accepted matches buttons

//make this render MatchCard