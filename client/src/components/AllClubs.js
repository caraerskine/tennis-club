import { React, useContext } from 'react'
import { ClubsContext } from '../context/clubs'
import ClubCard from './ClubCard'

function AllClubs(){

    const { clubs } = useContext(ClubsContext)

    console.log("clubs", clubs)

    const displayClubs = clubs.map((club) => 
      <ClubCard 
        key={club.id} 
        id={club.id}
        club_img={club.club_img}
        club_name={club.club_name} 
        street={club.street} 
        description={club.description}
      />
    )


return (
  <div className="App" >
    <br></br>
    <h3>Access to clubs in all 5 boroughs!</h3>
    {displayClubs}
  </div>
  );
}


export default AllClubs;
   