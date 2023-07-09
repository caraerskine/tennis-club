import React, { useContext } from 'react'
import { UserContext } from "../context/user";
import { Link } from 'react-router-dom'

function MyMatches() {
    
    const { user } = useContext(UserContext);

    //

  return (
//show pending matches, accepted matches and completed matches
//do these then each need their own components? No.

//should it be on a card? like "MyMatchCard" ?
    <>

      <ol>





      </ol>
      
      <div>
              <br></br>
              <Link to={`/matches/pending`}>
                  <button>Pending Matches</button>
              </Link>
              <Link to={`/matches/accepted`}>
                  <button>Accepted Matches</button>
              </Link>
              <Link to={`/matches/completed`}>
                  <button>Completed Matches</button>
              </Link>
      </div>
    </>

  )
}

export default MyMatches

